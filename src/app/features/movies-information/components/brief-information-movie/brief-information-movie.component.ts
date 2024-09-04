import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import BriefInformationMovie from '../../../../core/classes/brief-information-movie.class';
import { NgClass, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-brief-information-movie',
  standalone: true,
  imports: [NgClass, DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './brief-information-movie.component.html',
  styleUrl: './brief-information-movie.component.scss',
})
export class BriefInformationMovieComponent {
  @Input() movie?: BriefInformationMovie;
  @Input() isShort: boolean = false;

  public showMovie(id: string) {
    console.log(id);
  }

  public test(value: any) {
    console.dir(value.src);
  }
}
