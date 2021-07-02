import { Store } from '@ngrx/store';

import { AuthState } from '../../reducers/auth/auth.reducers';
import { CheckValidTokenAction } from '../../reducers/auth/auth.actions';

export abstract class NotAuthCheck {
  abstract store$: Store<AuthState>;

  checkAuth(): void {
    this.store$.dispatch(new CheckValidTokenAction());
  }
}
