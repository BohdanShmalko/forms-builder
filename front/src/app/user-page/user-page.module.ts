import {NgModule} from "@angular/core";
import {routerUserPageComponents, RoutingUserPageModule} from "./user-page-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [routerUserPageComponents],
  imports: [RoutingUserPageModule, CommonModule],
  providers: []
})
export class UserPageModule {
}
