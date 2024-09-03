import {
  Component,
  computed,
  model,
  inject,
  Signal,
  signal,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { UniversalMovieSearchService } from '../../services/universal-movie-search.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {
  MatAutocompleteSelectedEvent,
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chips-autocomplete',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chips-autocomplete.component.html',
  styleUrl: './chips-autocomplete.component.scss',
})
export class ChipsAutocompleteComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentValue = model('');
  readonly values = signal<string[]>([]);
  readonly announcer = inject(LiveAnnouncer);
  allValues: string[] = [];
  filteredValues: Signal<string[]> = signal<string[]>([]);
  labelName: string = '';

  @Input() type: string = '';
  @Output() changeValue = new EventEmitter<{
    values: string[];
    type: string;
  }>();

  constructor(private universalSearch: UniversalMovieSearchService) {}

  ngOnInit(): void {
    const getFilteredValues = () => {
      const currentGenre = this.currentValue().toLowerCase();
      return currentGenre
        ? this.allValues.filter((value) =>
            value.toLowerCase().includes(currentGenre)
          )
        : this.allValues.slice();
    };

    this.universalSearch.getGenresOrCountries(this.type).subscribe((data) => {
      this.allValues = data;
      this.filteredValues = computed(getFilteredValues);
    });

    switch (this.type) {
      case 'genres':
        this.labelName = 'Жанр';
        break;
      case 'countries':
        this.labelName = 'Страна';
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (
      value &&
      !this.values().includes(value) &&
      this.allValues.includes(value)
    ) {
      this.values.update((values) => [...values, value]);
    }

    this.currentValue.set('');
    this.changeValue.emit({ values: this.values(), type: this.type });
  }

  remove(value: string): void {
    this.values.update((values) => {
      const index = values.indexOf(value);
      if (index < 0) {
        return values;
      }

      values.splice(index, 1);
      this.announcer.announce(`Removed ${value}`);
      return [...values];
    });
    this.changeValue.emit({ values: this.values(), type: this.type });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;
    if (!this.values().includes(value) && this.allValues.includes(value)) {
      this.values.update((values) => [...values, value]);
    }
    this.currentValue.set('');
    event.option.deselect();
    this.changeValue.emit({ values: this.values(), type: this.type });
  }
}
