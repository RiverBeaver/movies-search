import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
import {
  YEARS_OPTIONS,
  RATING_OPTIONS,
  MPAA_OPTIONS,
} from '../../../../core/constants/constants';
import { Store } from '@ngrx/store';
import BriefInformationMovie from '../../../../core/classes/brief-information-movie.class';
import { UpdateMovieAction } from '../../../../store/actions/movies.action';

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
export class SearchFormComponent implements OnInit, OnChanges {
  @Input() types: string[] = [];

  public yearOptions = YEARS_OPTIONS;
  public ratingOptions = RATING_OPTIONS;
  public mpaaOptions = MPAA_OPTIONS;

  public searchForm = new FormGroup({
    genres: new FormControl([]),
    countries: new FormControl([]),
    year: new FormControl(),
    ratings: new FormGroup({
      mpaa: new FormControl(),
      kp: new FormControl(),
      imdb: new FormControl(),
    }),
  });

  constructor(
    private universalSearch: UniversalMovieSearchService,
    private store: Store
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['types'] && changes['types']) {
      this.submitValues();
    }
  }

  ngOnInit(): void {
    this.submitValues();
  }

  public addValue(event: { values: string[]; type: string }): void {
    this.searchForm.patchValue({ [event.type]: event.values });
  }

  public submitValues(): void {
    this.universalSearch
      .searchMoviesByFilter(this.types, this.searchForm.value)
      .subscribe((movies: BriefInformationMovie[]) =>
        this.store.dispatch(UpdateMovieAction({ movies }))
      );
  }
}
