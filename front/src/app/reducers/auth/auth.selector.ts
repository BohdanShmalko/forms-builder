import {createFeatureSelector, createSelector} from "@ngrx/store";
import {authNode, AuthState} from "./auth.reducers";

export const selectorAuthFeature = createFeatureSelector<AuthState>(authNode)

export const selectIsAuth = createSelector(selectorAuthFeature,
  (state: AuthState): boolean => state.isRegisteredUser)

export const selectLoginError = createSelector(selectorAuthFeature,
  (state: AuthState): string => state.loginError)

export const selectRegistrationError = createSelector(selectorAuthFeature,
  (state: AuthState): string => state.registrationError)
