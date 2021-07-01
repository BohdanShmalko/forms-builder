import {NgModule} from "@angular/core";
import {AppLoginRoutingModule, routerLoginComponents} from "./login-routing.module";
import {LoginMaterialModule} from "./material.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MyPipesModule} from "../shared/pipes/my-pipes.module";

@NgModule({
  declarations : [routerLoginComponents],
  imports: [ReactiveFormsModule, CommonModule, AppLoginRoutingModule, LoginMaterialModule, MyPipesModule],
  providers: []
})
export class LoginModule { }
