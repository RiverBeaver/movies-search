import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KEY } from '../../../core/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class UniversalMovieSearchService {
  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': KEY,
    },
  };

  constructor(private http: HttpClient) {}

  getGenresOrCountries(type: string): Observable<string[]> {
    return this.http
      .get(
        `https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=${type}.name`,
        this.options
      )
      .pipe(
        map((data: any) => {
          const values = data.map((elem: any) => {
            return elem.name;
          });

          return values;
        })
      );
  }
}
