import { createAction, props } from '@ngrx/store';

export enum userActionsType {
  getUserData = '[USER] get user data',
  setUserData = '[USER] set user data',
  userPageError = '[USER] user page error',
}


export type GetUserDataActionType = { type: userActionsType.getUserData };
export const GetUserDataAction = createAction(userActionsType.getUserData);

export type SetUserDataActionType = { type: userActionsType.setUserData, data: string  };
export const SetUserDataAction = createAction(
  userActionsType.setUserData,
  props<{ data: string }>()
);

export type SetUserErrorActionType = { type: userActionsType.userPageError,  message: string }
export const SetUserErrorAction = createAction(
  userActionsType.userPageError,
  props<{ message: string }>()
);


export type UserActions = GetUserDataActionType | SetUserDataActionType | SetUserErrorActionType;
