import {Action} from '@ngrx/store';

export enum userActionsType {
  getUserData = '[USER] get user data',
  setUserData = '[USER] set user data',
  userPageError = '[USER] user page error',
}

export class GetUserDataAction implements Action {
  readonly type = userActionsType.getUserData;
}

export class SetUserDataAction implements Action {
  readonly type = userActionsType.setUserData;

  constructor(public payload: { data: string }) {
  }
}

export class SetUserError implements Action {
  readonly type = userActionsType.userPageError;

  constructor(public payload: { message: string }) {
  }
}

export type UserActions = GetUserDataAction | SetUserDataAction | SetUserError;
