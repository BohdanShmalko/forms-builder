import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { userNode, UserState } from './user.reducers';

export type UserFeatureType = MemoizedSelector<object, UserState, DefaultProjectorFn<UserState>>;
export type UserDataSelectorType = MemoizedSelector<object, string, DefaultProjectorFn<string>>;

export const selectorUserFeature: UserFeatureType = createFeatureSelector<UserState>(userNode);

export const selectUserData: UserDataSelectorType = createSelector(selectorUserFeature,
  (state: UserState): string => state.data);
