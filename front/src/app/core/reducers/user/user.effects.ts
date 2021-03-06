import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import {
  SetUserDataAction,
  SetUserDataActionType,
  SetUserErrorAction,
  SetUserErrorActionType,
  userActionsType
} from './user.actions';
import { UserPageService } from '@core/services';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserPageService) {
  }

  private getUserData$: Observable<SetUserDataActionType | SetUserErrorActionType> = createEffect(() =>
    this.actions$.pipe(
      ofType(userActionsType.getUserData),
      mergeMap(() => this.userService.getUserInf().pipe(
        map((data) => SetUserDataAction({ data: data.data.message })),
        catchError((err) => of( SetUserErrorAction({ message: err.message })))
      ))
    ))
}
