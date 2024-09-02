import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
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
  templateUrl: './search-by-line.component.html',
  styleUrl: './search-by-line.component.scss',
})
export class SearchByLineComponent {
  line = new FormControl('');
  isFocus: boolean = false;
  fiveMovies$?: Observable<BriefInformationMovie[]>;
  private subscription?: Subscription;

  constructor(private universalSearch: UniversalMovieSearchService) {}

  showMovies() {
    console.log(this.line.value);
    if (this.subscription) this.subscription.unsubscribe();
    if (this.line.value != null && this.line.value != '') {
      this.fiveMovies$ = this.universalSearch.getFiveMovies(this.line.value);
    }
  }

  onSubmit() {
    console.log(this.line.value);
  }

  changeFocus() {
    this.isFocus = !this.isFocus;
    console.log(this.isFocus);
  }
}
