import { Action } from '@ngrx/store';

import { UserAuth } from '@core/services';

export enum authActionsType {
  logout = '[AUTH] logout',
  login = '[AUTH] login',
  sendLogin = '[AUTH] send login',
  sendRegistration = '[AUTH] send registration',
  setLoginError = '[AUTH] set login error',
  setRegistrationError = '[AUTH] set registration error',
  checkAuth = '[AUTH] check auth',
  logoutAndDeleteToken = '[AUTH] logout and delete',
  checkValidToken = '[AUTH] check valid token',
}

export class LogoutAction implements Action {
  readonly type = authActionsType.logout;
}

export class LoginAction implements Action {
  readonly type = authActionsType.login;
}

export class SendLoginAction implements Action {
  readonly type = authActionsType.sendLogin;

  constructor( public payload: UserAuth ) {
  }
}

export class SendRegistrationAction implements Action {
  readonly type = authActionsType.sendRegistration;

  constructor( public payload: UserAuth ) {
  }
}

export class SetLoginErrorAction implements Action {
  readonly type = authActionsType.setLoginError;

  constructor( public payload: { message: string } ) {
  }
}

export class SetRegistrationErrorAction implements Action {
  readonly type = authActionsType.setRegistrationError;

  constructor( public payload: { message: string } ) {
  }
}

export class CheckAuthAction implements Action {
  readonly type = authActionsType.checkAuth;
}

export class LogoutAndDeleteTokenAction implements Action {
  readonly type = authActionsType.logoutAndDeleteToken;
}

export class CheckValidTokenAction implements Action {
  readonly type = authActionsType.checkValidToken;
}

export type AuthActions =
  LoginAction
  | LogoutAction
  | SendLoginAction
  | SendRegistrationAction
  | SetLoginErrorAction
  | SetRegistrationErrorAction
  | CheckAuthAction
  | LogoutAndDeleteTokenAction
  | CheckValidTokenAction;
