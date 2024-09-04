import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BriefInformationMovieComponent } from '../brief-information-movie/brief-information-movie.component';
import { UniversalMovieSearchService } from '../../../search/services/universal-movie-search.service';
import BriefInformationMovie from '../../../../core/classes/brief-information-movie.class';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [BriefInformationMovieComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {
  public moviesList$?: Subject<BriefInformationMovie[]>;

  constructor(private universalSearch: UniversalMovieSearchService) {
    this.moviesList$ = this.universalSearch.moviesList$;
  }
}
