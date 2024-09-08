import { catchError, exhaustMap, map } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GetMoviesFromServiceAction,
  UpdateMovieAction,
} from '../actions/movies.action';
import { UniversalMovieSearchService } from '../../features/search/services/universal-movie-search.service';

import { inject } from '@angular/core';
import { EMPTY } from 'rxjs';

export const getMovies = createEffect(
  (
    actions$ = inject(Actions),
    universalSearchService = inject(UniversalMovieSearchService)
  ) => {
    return actions$.pipe(
      ofType(GetMoviesFromServiceAction),
      exhaustMap((action) => {
        return universalSearchService
          .searchMoviesByFilter(action.types, action.option)
          .pipe(
            map((movies) => UpdateMovieAction({ movies: movies })),
            catchError(() => EMPTY)
          );
      })
    );
  },
  { functional: true }
);

// export const displayErrorAlert = createEffect(
//   () => {
//     return inject(Actions).pipe(
//       ofType(ActorsApiActions.actorsLoadedFailure),
//       tap(({ errorMsg }) => alert(errorMsg))
//     );
//   },
//   { functional: true, dispatch: false }
// );
