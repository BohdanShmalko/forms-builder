import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { select, Store } from '@ngrx/store';

import { AuthState } from '@core/reducers/auth/auth.reducers';
import { SendRegistrationAction } from '@core/reducers/auth/auth.actions';
import { selectRegistrationError } from '@core/reducers/auth/auth.selector';
import { PasswordValidator } from '@shared/validation/password.validator';
import { standardValidators } from '@shared/validation/standard';

class RePasswordErrorManager implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return control.touched && control.errors?.mismatch;
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ './registration.component.scss' ]
})
export class RegistrationComponent {

  public serverErrorMessage$ = this.storage$.pipe( select( selectRegistrationError ) )

  public registrationForm: FormGroup = this.fb.group({
    login: ['', [ ...standardValidators ]],
    password: ['', [ ...standardValidators ]],
    rePassword: ['']
  }, {validators: PasswordValidator});

  public rePasswordErrorManager = new RePasswordErrorManager()

  public get login(): AbstractControl | null {
    return this.registrationForm.get( 'login' )
  }

  public get password(): AbstractControl | null {
    return this.registrationForm.get( 'password' )
  }

  public get rePassword(): AbstractControl | null {
    return this.registrationForm.get( 'rePassword' )
  }

  constructor(private fb: FormBuilder,
              private storage$: Store<AuthState>) {
  }

  public sendDataToServer() {
    this.storage$.dispatch(new SendRegistrationAction( this.registrationForm.value ))
  }

}
