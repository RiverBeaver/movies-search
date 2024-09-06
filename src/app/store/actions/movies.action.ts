import { createAction, props } from '@ngrx/store';
import BriefInformationMovie from '../../core/classes/brief-information-movie.class';

export const UpdateMovieAction = createAction(
  '[Movies] Get new movies',
  props<{ movies: BriefInformationMovie[] }>()
);
