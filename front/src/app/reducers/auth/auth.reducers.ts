import {AuthActions, authActionsType} from './auth.actions';

export type AuthNodeType = 'auth';
export const authNode: AuthNodeType = 'auth';

export interface AuthState {
  isRegisteredUser: boolean,
  loginError: string,
  registrationError: string,
};

const initialState: AuthState = {
  isRegisteredUser: false,
  loginError: '',
  registrationError: '',
};

export const authReducer = (state = initialState, action: any): AuthState => { //TODO why not AuthActions ????
  switch (action.type) {
    case authActionsType.login:
      return {...state, isRegisteredUser: true};
    case authActionsType.logout:
      return {...state, isRegisteredUser: false};
    case authActionsType.setLoginError:
      return {...state, loginError: action.payload.message};
    case authActionsType.setRegistrationError:
      return {...state, registrationError: action.payload.message};
    default:
      return state;
  }
}


