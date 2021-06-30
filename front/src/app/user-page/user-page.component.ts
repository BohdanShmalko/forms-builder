import {Component, OnInit} from '@angular/core';
import {UserInf, UserPageService} from "./user-page.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth/auth.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private userPageService: UserPageService, private authService: AuthService, private _router: Router) {
  }

  userData ?: UserInf

  ngOnInit(): void {
    this.userPageService.getUserInf().subscribe((data) => {
      this.userData = data
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this._router.navigate(['/login'])
          this.authService.logoutUser()
        } else {
          console.log(err)
        }
      }
    })
  }

}
