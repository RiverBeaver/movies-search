import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchFormComponent } from '../../components/search-form/search-form.component';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [SearchFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent {}
