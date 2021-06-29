import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

const standardValidators = [Validators.required, Validators.minLength(3), Validators.maxLength(50)]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  loginForm = this.fb.group({
    login : ['', [...standardValidators]],
    password : ['', [...standardValidators]]
  })

  errorMessage = ''

  sendDataToServer() {
    console.log(this.loginForm.value)
  }

  ngOnInit(): void {
  }

}
