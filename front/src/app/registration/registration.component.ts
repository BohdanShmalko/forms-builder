import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { select, Store } from '@ngrx/store';

import { AuthState } from '../reducers/auth/auth.reducers';
import { SendRegistrationAction } from '../reducers/auth/auth.actions';
import { selectRegistrationError } from '../reducers/auth/auth.selector';
import { PasswordValidator } from '../shared/validation/password.validator';
import { standardValidators } from '../shared/validation/standard';

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

  public get login(): FormControl {
    //@ts-ignore
    return this.registrationForm.get( 'login' )
  }

  public get password(): FormControl {
    //@ts-ignore
    return this.registrationForm.get( 'password' )
  }

  public get rePassword(): FormControl {
    //@ts-ignore
    return this.registrationForm.get( 'rePassword' )
  }

  constructor(private fb: FormBuilder,
              private storage$: Store<AuthState>) {
  }

  public sendDataToServer() {
    this.storage$.dispatch(new SendRegistrationAction( this.registrationForm.value ))
  }

}
