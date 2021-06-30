import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthState} from "../reducers/auth/auth.reducers";
import {select, Store} from "@ngrx/store";
import {SendLoginAction} from "../reducers/auth/auth.actions";
import {selectLoginError} from "../reducers/auth/auth.selector";

const standardValidators = [Validators.required, Validators.minLength(3), Validators.maxLength(50)]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private storage$: Store<AuthState>) {
  }

  loginForm = this.fb.group({
    login: ['', [...standardValidators]],
    password: ['', [...standardValidators]]
  })

  errorMessage$ = this.storage$.pipe(select(selectLoginError))

  sendDataToServer() {
    this.storage$.dispatch(new SendLoginAction(this.loginForm.value))
  }

  ngOnInit(): void {
  }

}
