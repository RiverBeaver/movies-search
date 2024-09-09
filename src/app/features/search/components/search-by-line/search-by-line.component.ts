import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  filter,
  fromEvent,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
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
  public isOpen: boolean = false;
  public fiveMovies$ = new Subject<BriefInformationMovie[]>();
  private subscribeLine?: Subscription;
  private subscriptionService?: Subscription;
  private subscriptionEvent?: Subscription;
  // private inside = false;
  private debounceTime = 300;

  constructor(
    private universalSearch: UniversalMovieSearchService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscribeLine = this.line.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value: string | null) => {
        if (value) {
          if (this.subscriptionService) this.subscriptionService.unsubscribe();
          this.subscriptionService = this.universalSearch
            .getFiveMovies(value)
            .subscribe((movies: BriefInformationMovie[]) => {
              this.fiveMovies$.next(movies);
            });
        } else this.fiveMovies$.next([]);
      });
  }

  // @HostListener('mousedown')
  // clicked() {
  //   this.inside = true;
  // }
  // @HostListener('document:click')
  // clickedOut() {
  //   if (this.isOpen) this.isOpen = this.inside ? true : false;
  //   this.inside = false;
  // }

  public open(): void {
    this.isOpen = true;
    this.subscriptionEvent = fromEvent(document, 'click')
      .pipe(
        // debounceTime(this.debounceTime),
        filter((x: any) => {
          let elem = x.target;
          while (elem && elem !== document.body) {
            if (elem.id === 'header-searth') {
              return false;
            }
            elem = elem.parentNode;
          }
          return true;
        })
      )
      .subscribe((x: any) => {
        console.log(x);
        this.isOpen = false;
        this.cdr.detectChanges();
        this.subscriptionEvent?.unsubscribe();
      });
  }

  public onSubmit(): void {
    console.log(this.line.value);
  }

  public close() {
    this.isOpen = false;
    this.line.setValue('');
    this.subscriptionEvent?.unsubscribe();
  }

  ngOnDestroy(): void {
    this.subscribeLine?.unsubscribe();
  }
}
