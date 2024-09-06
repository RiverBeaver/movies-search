import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BriefInformationMovieComponent } from '../brief-information-movie/brief-information-movie.component';
import { UniversalMovieSearchService } from '../../../search/services/universal-movie-search.service';
import BriefInformationMovie from '../../../../core/classes/brief-information-movie.class';
import { Observable } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [BriefInformationMovieComponent, CommonModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent implements OnInit {
  public moviesList$?: Observable<BriefInformationMovie[]>;

  constructor(private universalSearch: UniversalMovieSearchService) {}
  ngOnInit(): void {
    this.moviesList$ = this.universalSearch.moviesList$;
  }
}
