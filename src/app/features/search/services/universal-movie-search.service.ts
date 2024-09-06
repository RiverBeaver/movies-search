import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
      'X-API-KEY': KEY,
    },
  };
  private _moviesListSubject$ = new BehaviorSubject<BriefInformationMovie[]>(
    []
  );
  public moviesList$ = this._moviesListSubject$.asObservable();

  constructor(private http: HttpClient) {}

  public getGenresOrCountries(type: string): Observable<string[]> {
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

          return values.filter((elem: string) => elem != 'аниме');
        })
      );
  }

  public getFiveMovies(name: string): Observable<BriefInformationMovie[]> {
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

  public searchMoviesByName(name: string) {}

  public searchMovieById(id: string) {}

  public searchMoviesByFilter(types: string[], params: FilterParams) {
    const type = types.reduce((acc, type) => acc + '&type=' + type, '');

    const paramsString = this.processingParameters(params);

    return this.http
      .get(
        `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=100&sortField=rating.kp&sortField=rating.imdb&sortType=-1&sortType=-1${
          type + paramsString
        }`,
        this.options
      )
      .pipe(
        map((data: any) => {
          const movies = data.docs;
          return movies.map((elem: any) => {
            return new BriefInformationMovie(elem);
          });
        })
      )
      .subscribe((data) => {
        this._moviesListSubject$.next(data);
      });
  }

  private processingParameters(params: FilterParams): string {
    const genres =
      params.genres && Array.isArray(params.genres)
        ? params.genres.reduce(
            (acc: string, elem: string) => acc + '&genres.name=+' + elem,
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

    return genres + countries + year + ratingMpaa + ratingkp + ratingImdb;
  }
}
