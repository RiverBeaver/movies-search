import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable, Subject, Subscription } from 'rxjs';
import BriefInformationMovie from '../../../../core/classes/brief-information-movie.class';
import { UniversalMovieSearchService } from '../../services/universal-movie-search.service';
import { CommonModule } from '@angular/common';
import { BriefInformationMovieComponent } from '../../../movies-information/components/brief-information-movie/brief-information-movie.component';

@Component({
  selector: 'app-search-by-line',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BriefInformationMovieComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-by-line.component.html',
  styleUrl: './search-by-line.component.scss',
})
export class SearchByLineComponent implements OnInit, OnDestroy {
  public line = new FormControl<string>('');
  public isFocus: boolean = false;
  public fiveMovies$ = new Subject<BriefInformationMovie[]>();
  private subscribeLine?: Subscription;
  private subscription?: Subscription;
  private inside = false;
  private debounceTime = 300;

  constructor(private universalSearch: UniversalMovieSearchService) {}

  ngOnInit(): void {
    this.subscribeLine = this.line.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value: string | null) => {
        if (value) {
          if (this.subscription) this.subscription.unsubscribe();
          this.subscription = this.universalSearch
            .getFiveMovies(value)
            .subscribe((movies: BriefInformationMovie[]) => {
              this.fiveMovies$.next(movies);
            });
        } else this.fiveMovies$.next([]);
      });
  }

  @HostListener('mousedown')
  clicked() {
    this.inside = true;
  }
  @HostListener('document:click')
  clickedOut() {
    this.isFocus = this.inside ? true : false;
    this.inside = false;
  }

  public onSubmit(): void {
    console.log(this.line.value);
  }

  public hasFocus(): void {
    this.isFocus = true;
  }

  ngOnDestroy(): void {
    this.subscribeLine?.unsubscribe();
  }
}
