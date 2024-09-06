import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';
import { MoviesListComponent } from '../../../movies-information/components/movies-list/movies-list.component';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [SearchFormComponent, MoviesListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent {
  @Input()
  set type(typeVideo: string) {
    this.types = this._getTypes(typeVideo);
  }
  public types: string[] = [];

  constructor() {}

  private _getTypes(type: string | null): string[] {
    console.log(type);
    switch (type) {
      case 'movie':
        return ['movie'];
      case 'series':
        return ['tv-series'];
      case 'cartoon':
        return ['cartoon', 'animated-series'];
      case 'anime':
        return ['anime'];
    }
    return [];
  }
}
