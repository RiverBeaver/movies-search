import { Routes, UrlSegment } from '@angular/router';
import { HomeComponent } from './features/movies-information/pages/home/home.component';
import { MovieSearchComponent } from './features/search/pages/movie-search/movie-search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    matcher: marcherFunction,
    component: MovieSearchComponent,
  },
];

function marcherFunction(url: UrlSegment[]) {
  if (
    url.length === 1 &&
    (url[0].path === 'movie' ||
      url[0].path === 'series' ||
      url[0].path === 'cartoon' ||
      url[0].path === 'anime')
  ) {
    return {
      consumed: url,
      posParams: { type: new UrlSegment(url[0].path, {}) },
    };
  }
  return null;
}
