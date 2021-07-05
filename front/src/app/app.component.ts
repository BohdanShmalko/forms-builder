import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthState } from '@core/reducers/auth/auth.reducers';
import { CheckAuthAction } from '@core/reducers/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  constructor(private store$: Store< AuthState >) {}

  ngOnInit() {
    this.store$.dispatch(new CheckAuthAction());
  }
}
