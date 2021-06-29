import {NgModule} from "@angular/core";
import {AppFormBuilderRoutingModule, routerFormBuilderComponents} from "./form-builder-routing.module";

@NgModule({
  declarations: [routerFormBuilderComponents],
  imports: [AppFormBuilderRoutingModule],
  providers: []
})
export class FormBuilderModule {
}
