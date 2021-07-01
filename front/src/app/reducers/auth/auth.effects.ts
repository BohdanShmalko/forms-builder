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
import {catchError, map, mergeMap, switchMap, take, takeWhile, tap} from 'rxjs/operators';
import {of} from "rxjs";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

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

  checkValidToken$ = createEffect(() => this.actions$.pipe(
    ofType(authActionsType.checkValidToken),
    mergeMap(() => this.authService.checkValidToken().pipe(
      map(() => {
        return new LoginAction()
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
            this.authService.logoutUser()
          }
        }
        return of(err).pipe(
          tap(err => {
            console.log(err)
          })
        )
      })
    )),
  ))

  // checkAuthError$ = createEffect(() => this.actions$.pipe(
  //   ofType(authActionsType.checkAuthToken),
  //   switchMap((err) => {
  //     return of(err)
  //   })
  // ))
}
