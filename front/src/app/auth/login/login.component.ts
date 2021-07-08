import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { SendLoginAction } from '@core/reducers/auth/auth.actions';
import { selectLoginError } from '@core/reducers/auth/auth.selector';
import { standardValidators } from '@shared/validation/standard';
import { AuthState } from '@core/reducers/auth/auth.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public errorMessage$ = this.storage$.pipe( select( selectLoginError ) );

  public loginForm: FormGroup = this.fb.group({
    login: [ '', [ ...standardValidators ] ],
    password: [ '', [ ...standardValidators ] ]
  });

  public get login(): AbstractControl | null {
    return this.loginForm.get( 'login' )
  };

  public get password(): AbstractControl | null {
    return this.loginForm.get( 'password' )
  };

  constructor(private fb: FormBuilder, private storage$: Store<AuthState>) {
  }

  public sendDataToServer(): void {
    this.storage$.dispatch(new SendLoginAction( this.loginForm.value ));
  }

}
