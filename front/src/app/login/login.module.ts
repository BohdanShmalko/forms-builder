import {NgModule} from "@angular/core";
import {AppLoginRoutingModule, routerLoginComponents} from "./login-routing.module";
import {LoginMaterialModule} from "./material.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations : [routerLoginComponents],
  imports: [ReactiveFormsModule, CommonModule, AppLoginRoutingModule, LoginMaterialModule],
  providers: []
})
export class LoginModule { }
