import {createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector} from '@ngrx/store';

import {authNode, AuthState} from './auth.reducers';

export type AuthFeatureType = MemoizedSelector<object, AuthState, DefaultProjectorFn<AuthState>>;
export type IsAuthSelectorType = MemoizedSelector<object, boolean, DefaultProjectorFn<boolean>>;
export type LoginErrorSelectorType = MemoizedSelector<object, string, DefaultProjectorFn<string>>;
export type RegistrationErrorSelectorType = MemoizedSelector<object, string, DefaultProjectorFn<string>>;

export const selectorAuthFeature: AuthFeatureType = createFeatureSelector<AuthState>(authNode);

export const selectIsAuth: IsAuthSelectorType = createSelector(selectorAuthFeature,
  (state: AuthState): boolean => state.isRegisteredUser);

export const selectLoginError: LoginErrorSelectorType = createSelector(selectorAuthFeature,
  (state: AuthState): string => state.loginError);

export const selectRegistrationError: RegistrationErrorSelectorType = createSelector(selectorAuthFeature,
  (state: AuthState): string => state.registrationError);
