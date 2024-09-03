import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChipsAutocompleteComponent } from '../chips-autocomplete/chips-autocomplete.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { UniversalMovieSearchService } from '../../services/universal-movie-search.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatButtonToggleModule,
    ChipsAutocompleteComponent,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  searchForm = new FormGroup({
    genres: new FormControl([]),
    countries: new FormControl([]),
    year: new FormControl(),
    ratings: new FormGroup({
      mpaa: new FormControl(),
      kp: new FormControl(),
      imdb: new FormControl(),
    }),
  });

  constructor(private universalSearch: UniversalMovieSearchService) {}

  addValue(event: { values: string[]; type: string }) {
    this.searchForm.patchValue({ [event.type]: event.values });
  }

  changeForm() {
    console.log(this.searchForm.value);
    this.universalSearch
      .searchMoviesByFilter('movie', this.searchForm.value)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
