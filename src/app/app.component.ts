import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieSearchComponent } from "../load/movie-search/movie-search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieSearchComponent, MovieSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movies-search';
}
