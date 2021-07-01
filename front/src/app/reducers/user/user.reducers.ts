import {UserActions, userActionsType} from "./user.actions";


export const userNode = 'user'

export interface UserState {
  data: string
  error : string
}

const initialState: UserState = {
  data: '',
  error : ''
}

export const userReducer = (state = initialState, action: any) => { //???????
  switch (action.type) {
    case userActionsType.setUserData:
      return {...state, data: action.payload.data}
    case userActionsType.userPageError:
      return {...state, error : action.payload.message}
    default:
      return state
  }
}


