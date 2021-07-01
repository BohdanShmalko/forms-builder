import {Injectable} from "@angular/core";
import {UserPageService} from "../../user-page/user-page.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {SetUserDataAction, SetUserError, userActionsType} from "./user.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserPageService) {
  }

  getUserData$ = createEffect(() => this.actions$.pipe(
    ofType(userActionsType.getUserData),
    mergeMap(() => this.userService.getUserInf().pipe(
      map((data) => new SetUserDataAction({data: data.data.message})
      ),
      catchError((err) => of(new SetUserError({message: err.message})))
    ))
  ))
}
