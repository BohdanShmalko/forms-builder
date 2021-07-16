import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserAuth {
  login: string,
  password: string,
}

export interface Token {
  token: string
}

export interface TokenValidation {
  isValidToken: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _basicURL = 'http://localhost:3001/user/';
  private _registrationURL = this._basicURL + 'new';
  private _loginURL = this._basicURL + 'login';
  private _checkTokenURL = this._basicURL + 'check/token';
  private _TOKEN = 'token';

  constructor(private http: HttpClient) {
  }

  public get isLoggedIn(): boolean {
    return !!localStorage.getItem(this._TOKEN)
  }

  public get getToken(): string | null {
    return localStorage.getItem(this._TOKEN)
  }

  public registrationUser( user: UserAuth ): Observable< Token > {
    return this.http.post< Token >( this._registrationURL, user )
  }

  public loginUser( user: UserAuth ): Observable< Token > {
    return this.http.post< Token >( this._loginURL, user )
  }

  public checkValidToken(): Observable< TokenValidation > {
    return this.http.get< TokenValidation >(this._checkTokenURL)
  }

  public storeToken( token: string): void {
    localStorage.setItem(this._TOKEN, token)
  }

  public logoutUser(): void {
    localStorage.removeItem(this._TOKEN)
  }
}
