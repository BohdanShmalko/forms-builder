import {NgModule} from "@angular/core";
import {AppFormBuilderRoutingModule, routerFormBuilderComponents} from "./form-builder-routing.module";
import {FormBuilderMaterialModule} from "./material/material.module";
import {CommonModule} from "@angular/common";
import {PortalModule} from "@angular/cdk/portal";

@NgModule({
  declarations: [routerFormBuilderComponents],
  imports: [AppFormBuilderRoutingModule, FormBuilderMaterialModule, CommonModule, PortalModule],
  providers: []
})
export class FormBuilderModule {

}
