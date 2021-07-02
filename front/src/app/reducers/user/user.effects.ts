import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { SetUserDataAction, SetUserError, userActionsType } from './user.actions';
import { UserPageService } from '../../shared/user/user-page.service';

@Injectable()
export class UserEffects {

  private getUserData$: Observable<SetUserDataAction | SetUserError> = createEffect(() =>
    this.actions$.pipe(
      ofType(userActionsType.getUserData),
      mergeMap(() => this.userService.getUserInf().pipe(
        map((data) => new SetUserDataAction({ data: data.data.message })),
        catchError((err) => of( new SetUserError({ message: err.message } )))
      ))
    ))

  constructor( private actions$: Actions, private userService: UserPageService ) {
  }
}
