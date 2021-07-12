import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface UserInf {
  data : {
    message : string
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserPageService {

  private _basicURL = 'http://localhost:3001/user/';
  private _userInfURL = this._basicURL + 'getinf';

  constructor(private http : HttpClient) { }

  getUserInf() : Observable< UserInf > {
    return this.http.get< UserInf >( this._userInfURL )
  }
}
