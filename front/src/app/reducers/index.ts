import {authNode, authReducer, AuthState} from "./auth/auth.reducers";
import {AuthEffects} from "./auth/auth.effects";

export interface State {
  [authNode]: AuthState
}

export const reducers = {
  [authNode]: authReducer
}

export const effects = [AuthEffects]
