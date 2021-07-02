import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../reducers/auth/auth.reducers';
import { Observable } from 'rxjs';

import { selectIsAuth } from '../reducers/auth/auth.selector';
import { LogoutAndDeleteTokenAction } from '../reducers/auth/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public isReqUser$: Observable<boolean> = this.store$.pipe( select( selectIsAuth ) );

  constructor(private store$: Store<AuthState>) {
  }

  public logout(): void {
    this.store$.dispatch(new LogoutAndDeleteTokenAction())
  }

}
