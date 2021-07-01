import {NgModule} from "@angular/core";
import {routerRegistrationComponents, RoutingRegistrationModule} from "./registration-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RegistrationMaterialModule} from "./material.module";
import {MyPipesModule} from "../shared/pipes/my-pipes.module";

@NgModule({
  declarations : [routerRegistrationComponents],
    imports: [ReactiveFormsModule, CommonModule, RegistrationMaterialModule, RoutingRegistrationModule, MyPipesModule],
  providers: []
})
export class RegistrationModule { }