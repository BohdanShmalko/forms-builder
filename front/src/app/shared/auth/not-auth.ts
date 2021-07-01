import {Store} from "@ngrx/store";
import {AuthState} from "../../reducers/auth/auth.reducers";
import {CheckValidTokenAction} from "../../reducers/auth/auth.actions";

export abstract class NotAuthCheck {
  protected constructor(private store$: Store<AuthState>) {
  }

  checkAuth() {
    this.store$.dispatch(new CheckValidTokenAction())
  }
}
