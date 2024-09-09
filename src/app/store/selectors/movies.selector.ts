import BriefInformationMovie from '../../core/classes/brief-information-movie.class';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectMovies =
  createFeatureSelector<ReadonlyArray<BriefInformationMovie>>('movies');
