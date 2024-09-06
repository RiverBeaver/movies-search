import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import BriefInformationMovie from '../../../../core/classes/brief-information-movie.class';
import { NgClass, DecimalPipe } from '@angular/common';
import { TypeRuPipe } from '../../../../core/pipes/type-ru.pipe';
import { TimeFormatterPipe } from '../../../../core/pipes/time-formatter.pipe';
import { ReleaseYearsFormatterPipe } from '../../../../core/pipes/release-years-formatter.pipe';

@Component({
  selector: 'app-brief-information-movie',
  standalone: true,
  imports: [
    NgClass,
    DecimalPipe,
    TypeRuPipe,
    TimeFormatterPipe,
    ReleaseYearsFormatterPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brief-information-movie.component.html',
  styleUrl: './brief-information-movie.component.scss',
})
export class BriefInformationMovieComponent {
  @Input() movie?: BriefInformationMovie;
  @Input() isShort: boolean = false;
  @Output() select = new EventEmitter();

  public showMovie(id: string) {
    console.log(id);
    this.select.emit();
  }
}
