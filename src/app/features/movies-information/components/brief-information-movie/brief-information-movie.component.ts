import { Component, Input } from '@angular/core';
import BriefInformationMovie from '../../../../core/classes/brief-information-movie.class';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-brief-information-movie',
  standalone: true,
  imports: [NgClass],
  templateUrl: './brief-information-movie.component.html',
  styleUrl: './brief-information-movie.component.scss',
})
export class BriefInformationMovieComponent {
  @Input() movie?: BriefInformationMovie;
  @Input() isLine: boolean = false;
}
