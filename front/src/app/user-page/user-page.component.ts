import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AuthState } from '@core/reducers/auth/auth.reducers';
import { NotAuthCheck } from '@core/services/auth/not-auth';
import { selectUserData } from '@core/reducers/user/user.selector';
import { GetUserDataAction } from '@core/reducers/user/user.actions';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [ './user-page.component.scss' ]
})
export class UserPageComponent extends NotAuthCheck implements OnInit {

  userData$ = this.store$.pipe( select( selectUserData ) );

  constructor(public store$: Store< AuthState >) {
    super();
  }

  ngOnInit(): void {
    this.checkAuth()
    this.store$.dispatch(GetUserDataAction())
  }

}
