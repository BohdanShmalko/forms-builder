import {createFeatureSelector, createSelector} from "@ngrx/store";
import {userNode, UserState} from "./user.reducers";

export const selectorUserFeature = createFeatureSelector<UserState>(userNode)

export const selectUserData = createSelector(selectorUserFeature,
  (state: UserState): string => state.data)
