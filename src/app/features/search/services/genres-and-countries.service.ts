import { Injectable } from '@angular/core';
import { UniversalMovieSearchService } from './universal-movie-search.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenresAndCountriesService {
  values$: Observable<string[]> = new Observable<string[]>();

  constructor(private searchService: UniversalMovieSearchService) {
    this.values$;
  }
}
