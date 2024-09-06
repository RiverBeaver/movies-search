import { createReducer, on } from '@ngrx/store';
import { UpdateMovieAction } from '../actions/movies.action';
import BriefInformationMovie from '../../core/classes/brief-information-movie.class';

export const initialState: ReadonlyArray<BriefInformationMovie> = [];

export const moviesReducer = createReducer(
  initialState,
  on(UpdateMovieAction, (_state, { movies }) => movies)
);
