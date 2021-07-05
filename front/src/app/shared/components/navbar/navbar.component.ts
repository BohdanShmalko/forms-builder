import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthState } from '@core/reducers/auth/auth.reducers';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { selectIsAuth } from '@core/reducers/auth/auth.selector';
import { LogoutAndDeleteTokenAction } from '@core/reducers/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isReqUser$: Observable<boolean> = this.store$.pipe( select( selectIsAuth ) );

  constructor(private store$: Store<AuthState>, private _router : Router) {
  }

  public logout(): void {
    this.store$.dispatch(new LogoutAndDeleteTokenAction())
    this._router.navigate(['login'])
  }

  toRegistrationPage(): void {
    this._router.navigate(['registration'])
  }

  toFormBuilderPage(): void {
    this._router.navigate(['formbuilder'])
  }

  toLoginPage(): void {
    this._router.navigate(['login'])
  }

  toUserPage(): void {
    this._router.navigate(['userpage'])
  }

}
