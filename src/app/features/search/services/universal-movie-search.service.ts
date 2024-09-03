import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { KEY } from '../../../core/constants/constants';
import BriefInformationMovie from '../../../core/classes/brief-information-movie.class';

type FilterParams = {
  genres?: string[] | null;
  countries?: string[] | null;
  year?: string | null;
  ratings?: {
    mpaa?: string | null;
    kp?: string | null;
    imdb?: string | null;
  };
};

@Injectable({
  providedIn: 'root',
})
export class UniversalMovieSearchService {
  private options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      ['Content-Type']: 'application/x-www-form-urlencoded;charset=UTF-8',
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

  getFiveMovies(name: string): Observable<BriefInformationMovie[]> {
    return this.http
      .get(
        `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=5&query=${name}`,
        this.options
      )
      .pipe(
        map((data: any) => {
          const movies = data.docs;
          console.log(movies);
          return movies.map((elem: any) => {
            return new BriefInformationMovie(elem);
          });
        })
      );
  }

  searchMoviesByName(name: string) {}

  searchMovieById(id: string) {}

  searchMoviesByFilter(type: string, params: FilterParams) {
    type = '&type=' + type;
    const genres =
      params.genres && Array.isArray(params.genres)
        ? params.genres.reduce(
            (acc: string, elem: string) => acc + '&genres.name=' + elem,
            ''
          )
        : '';
    const countries = params.countries
      ? params.countries.reduce(
          (acc: string, elem: string) => acc + '&countries.name=' + elem,
          ''
        )
      : '';
    const year = params.year ? '&year=' + params.year : '';
    const ratingMpaa = params.ratings?.mpaa
      ? '&ratingMpaa=' + params.ratings.mpaa
      : '';
    const ratingkp = params.ratings?.kp
      ? '&rating.kp=' + params.ratings.kp
      : '';
    const ratingImdb = params.ratings?.imdb
      ? '&rating.imdb=' + params.ratings.imdb
      : '';

    return this.http.get(
      `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10${
        type + genres + countries + year + ratingMpaa + ratingkp + ratingImdb
      }`,
      this.options
    );
  }
}
