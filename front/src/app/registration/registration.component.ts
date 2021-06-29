import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

const standardValidators = [Validators.required, Validators.minLength(3), Validators.maxLength(50)]

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  loginForm = this.fb.group({
    login: ['', [...standardValidators]],
    password: ['', [...standardValidators]],
    rePassword: ['', [...standardValidators]]
  })

  errorMessage = ''

  sendDataToServer() {
    console.log(this.loginForm.value)
  }

  ngOnInit(): void {
  }

}
