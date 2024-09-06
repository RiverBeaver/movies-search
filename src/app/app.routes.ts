import { Routes } from '@angular/router';
import { HomeComponent } from './features/movies-information/pages/home/home.component';
import { MovieSearchComponent } from './features/search/pages/movie-search/movie-search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':type', component: MovieSearchComponent },
];
