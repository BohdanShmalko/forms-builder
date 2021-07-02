import { authNode, authReducer, AuthState } from './auth/auth.reducers';
import { AuthEffects } from './auth/auth.effects';
import { userNode, userReducer, UserState } from './user/user.reducers';
import { UserEffects } from './user/user.effects';

export interface State {
  [ authNode ]: AuthState
  [ userNode ]: UserState
};

export const reducers = {
  [ authNode ]: authReducer,
  [ userNode ]: userReducer
};

export const effects = [ AuthEffects, UserEffects ];
