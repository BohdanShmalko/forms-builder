import { ActionReducerMap } from '@ngrx/store';

import { authNode, authReducer, AuthState } from './auth/auth.reducers';
import { AuthEffects } from './auth/auth.effects';
import { userNode, userReducer, UserState } from './user/user.reducers';
import { UserEffects } from './user/user.effects';
import { UserActions } from '@core/reducers/user/user.actions';
import { AuthActions } from '@core/reducers/auth/auth.actions';

export type ActionsType = UserActions & AuthActions

export interface State {
  [authNode]: AuthState
  [userNode]: UserState
};

export const reducers : ActionReducerMap<State, ActionsType> = {
  [authNode]: authReducer,
  [userNode]: userReducer
};

export const effects = [AuthEffects, UserEffects];
