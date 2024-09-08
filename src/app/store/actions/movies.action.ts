import { createAction, props } from '@ngrx/store';
import BriefInformationMovie from '../../core/classes/brief-information-movie.class';
import { FilterParams } from '../../core/type/filter.type';

export const UpdateMovieAction = createAction(
  '[Movies] Get new movies Success',
  props<{ movies: BriefInformationMovie[] }>()
);

export const GetMoviesFromServiceAction = createAction(
  '[Movies] Get new movies from service',
  props<{ types: string[]; option: FilterParams }>()
);
