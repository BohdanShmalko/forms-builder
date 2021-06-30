import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth/auth.service";
import {Router} from "@angular/router";
import {PasswordValidator} from "./password.validator";
import {ErrorStateMatcher} from "@angular/material/core";
import {select, Store} from "@ngrx/store";
import {AuthState} from "../reducers/auth/auth.reducers";
import {LoginAction, SendRegistrationAction} from "../reducers/auth/auth.actions";
import {selectRegistrationError} from "../reducers/auth/auth.selector";

const standardValidators = [Validators.required, Validators.minLength(3), Validators.maxLength(50)]

class RePasswordErrorManager implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    const isHasError = control.touched && control.errors?.mismatch
    return isHasError
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: any;

  constructor(private fb: FormBuilder,
              private storage$: Store<AuthState>) {
  }

  serverErrorMessage = this.storage$.pipe(select(selectRegistrationError))

  get login() {
    return this.registrationForm.get('login')
  }

  get password() {
    return this.registrationForm.get('password')
  }

  get rePassword() {
    return this.registrationForm.get('rePassword')
  }

  rePasswordErrorManager = new RePasswordErrorManager()

  sendDataToServer() {
    this.storage$.dispatch(new SendRegistrationAction(this.registrationForm.value))
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      login: ['', [...standardValidators]],
      password: ['', [...standardValidators]],
      rePassword: ['']
    }, {validators: PasswordValidator})
  }

}
