import { UserActions, userActionsType } from './user.actions';

export type UserNodeType = 'user'
export const userNode: UserNodeType = 'user';

export interface UserState {
  data: string,
  error: string,
};

const initialState: UserState = {
  data: '',
  error: '',
};

export const userReducer = (state = initialState, action: any): UserState => { //TODO why not UserActions ????
  switch ( action.type ) {
    case userActionsType.setUserData:
      return { ...state, data: action.payload.data };
    case userActionsType.userPageError:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
}


