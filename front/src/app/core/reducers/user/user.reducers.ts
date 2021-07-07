import { ActionReducer } from '@ngrx/store';

import { UserActions, userActionsType } from './user.actions';

export type UserNodeType = 'user';
export const userNode: UserNodeType = 'user';

export interface UserState {
  data: string,
  error: string,
}

const initialState: UserState = {
  data: '',
  error: '',
}

export const userReducer: ActionReducer<UserState, UserActions> = (state = initialState, action) => {
  switch ( action.type ) {
    case userActionsType.setUserData:
      return { ...state, data: action.data };
    case userActionsType.userPageError:
      return { ...state, error: action.message };
    default:
      return state;
  }
}


