import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {select, Store} from "@ngrx/store";

import {SendLoginAction} from "../reducers/auth/auth.actions";
import {selectLoginError} from "../reducers/auth/auth.selector";
import {standardValidators} from "../shared/validation/standard";
import {AuthState} from "../reducers/auth/auth.reducers";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public errorMessage$ = this.storage$.pipe(select(selectLoginError));

  public loginForm: FormGroup = this.fb.group({
    login: ['', [...standardValidators]],
    password: ['', [...standardValidators]]
  });

  public get login(): FormControl {
    //@ts-ignore
    return this.loginForm.get('login')
  };

  public get password(): FormControl {
    //@ts-ignore
    return this.loginForm.get('password')
  };

  constructor(private fb: FormBuilder, private storage$: Store<AuthState>) {
  }

  public sendDataToServer(): void {
    this.storage$.dispatch(new SendLoginAction(this.loginForm.value));
  }

}
