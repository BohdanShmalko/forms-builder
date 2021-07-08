import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, takeWhile, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


import {
  authActionsType,
  LoginAction,
  LogoutAction,
  SetLoginErrorAction,
  SetRegistrationErrorAction
} from './auth.actions';
import { AuthService } from '@core/services';

@Injectable()
export class AuthEffects {

  private loginUser$: Observable<LoginAction | SetLoginErrorAction> = createEffect(() =>
    this.actions$.pipe(
      ofType(authActionsType.sendLogin),
      mergeMap(({ payload }) => this.authService.loginUser(payload).pipe(
        map(({ token }) => {
          this.authService.storeToken( token )
          this.router.navigate([ '/formbuilder' ])
          return new LoginAction()
        }),
        catchError(({error: {message}}) => of(new SetLoginErrorAction({message})))
        )
      )
    )
  )

  private registrationUser$: Observable<LoginAction | SetRegistrationErrorAction> = createEffect(() =>
    this.actions$.pipe(
      ofType(authActionsType.sendRegistration),
      mergeMap(({payload}) => this.authService.registrationUser(payload).pipe(
        map(({token}) => {
          this.authService.storeToken(token)
          this.router.navigate(['/formbuilder'])
          return new LoginAction()
        }),
        catchError(({error: {message}}) => of(new SetRegistrationErrorAction({message})))
      ))
    ))

  private logoutAndDelete$: Observable<LogoutAction> = createEffect(() => this.actions$.pipe(
    ofType(authActionsType.logoutAndDeleteToken),
    switchMap(() => {
      this.authService.logoutUser()
      return of(new LogoutAction())
    })
  ))

  private checkUserAuth$: Observable<LoginAction> = createEffect(() => this.actions$.pipe(
    ofType(authActionsType.checkAuth),
    takeWhile(() => this.authService.isLoggedIn),
    switchMap(() => of(new LoginAction()))
  ))

  private checkValidToken$: Observable<LoginAction> = createEffect(() => this.actions$.pipe(
    ofType(authActionsType.checkValidToken),
    mergeMap(() => this.authService.checkValidToken().pipe(
      map(() => {
        return new LoginAction()
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/auth/login'])
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

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
  }
}
