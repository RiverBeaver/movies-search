import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BriefInformationMovieComponent } from '../brief-information-movie/brief-information-movie.component';
import { Observable } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectMovies } from '../../../../store/selectors/movies.selector';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [BriefInformationMovieComponent, CommonModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent implements OnInit {
  public moviesList$?: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.moviesList$ = this.store.select(selectMovies);
  }
}
