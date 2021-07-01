import {Component, OnInit} from '@angular/core';
import {UserInf, UserPageService} from "./user-page.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth/auth.service";
import {select, Store} from "@ngrx/store";
import {AuthState} from "../reducers/auth/auth.reducers";
import {CheckValidTokenAction} from "../reducers/auth/auth.actions";
import {NotAuthCheck} from "../shared/auth/not-auth";
import {selectUserData} from "../reducers/user/user.selector";
import {GetUserDataAction} from "../reducers/user/user.actions";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private store$: Store<AuthState>) {
  }

  userData = this.store$.pipe(select(selectUserData))

  ngOnInit(): void {
    this.store$.dispatch(new CheckValidTokenAction())
    this.store$.dispatch(new GetUserDataAction())
  }

}
