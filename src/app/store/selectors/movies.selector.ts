import BriefInformationMovie from '../../core/classes/brief-information-movie.class';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectBooks =
  createFeatureSelector<ReadonlyArray<BriefInformationMovie>>('movies');
