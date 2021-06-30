import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

export interface UserAuth {
  login: string
  password: string
}

export interface Token {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _basicURL = 'http://localhost:3001/user/'
  private _registrationURL = this._basicURL + 'new'
  private _loginURL = this._basicURL + 'login'
  private _TOKEN = 'token'

  constructor(private http: HttpClient) {
  }

  registrationUser(user: UserAuth): Observable<Token> {
    return this.http.post<Token>(this._registrationURL, user)
  }

  loginUser(user: UserAuth): Observable<Token> {
    return this.http.post<Token>(this._loginURL, user)
  }

  storeToken(token: string) {
    localStorage.setItem(this._TOKEN, token)
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem(this._TOKEN)
  }

  get getToken(): string | null {
    return localStorage.getItem(this._TOKEN)
  }

  logoutUser() {
    localStorage.removeItem(this._TOKEN)
  }
}
