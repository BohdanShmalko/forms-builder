import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../../shared/auth/auth.service";
import {
  authActionsType,
  LoginAction,
  LogoutAction,
  SetLoginErrorAction,
  SetRegistrationErrorAction
} from "./auth.actions";
import {catchError, map, mergeMap, switchMap, takeWhile} from 'rxjs/operators';
import {of} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
  }

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActionsType.sendLogin),
      mergeMap(({payload}) => this.authService.loginUser(payload).pipe(
        map(({token}) => {
          this.authService.storeToken(token)
          this.router.navigate(['/userpage'])
          return new LoginAction()
        }),
        catchError(({error: {message}}) => of(new SetLoginErrorAction({message})))
        )
      )
    )
  )

  registrationUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActionsType.sendRegistration),
      mergeMap(({payload}) => this.authService.registrationUser(payload).pipe(
        map(({token}) => {
          this.authService.storeToken(token)
          this.router.navigate(['/userpage'])
          return new LoginAction()
        }),
        catchError(({error: {message}}) => of(new SetRegistrationErrorAction({message})))
      ))
    ))

  logoutAndDelete$ = createEffect(() => this.actions$.pipe(
    ofType(authActionsType.logoutAndDeleteToken),
    switchMap(() => {
      this.authService.logoutUser()
      return of(new LogoutAction())
    })
  ))

  checkUserAuth$ = createEffect(() => this.actions$.pipe(
    ofType(authActionsType.checkAuth),
    takeWhile(() => this.authService.isLoggedIn),
    switchMap(() => of(new LoginAction()))
  ))
}
