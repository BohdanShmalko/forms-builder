import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AuthState} from "../reducers/auth/auth.reducers";
import {Observable} from "rxjs";
import {selectIsAuth} from "../reducers/auth/auth.selector";
import {LogoutAction, LogoutAndDeleteTokenAction} from "../reducers/auth/auth.actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private store$: Store<AuthState>) {
  }

  isReqUser$: Observable<boolean> = this.store$.pipe(select(selectIsAuth))

  logout() {
    this.store$.dispatch(new LogoutAndDeleteTokenAction())
  }

  ngOnInit(): void {
  }

}
