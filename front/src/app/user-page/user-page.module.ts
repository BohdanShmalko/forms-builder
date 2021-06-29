import {NgModule} from "@angular/core";
import {routerUserPageComponents, RoutingUserPageModule} from "./user-page-routing.module";

@NgModule({
  declarations: [routerUserPageComponents],
  imports: [RoutingUserPageModule],
  providers: []
})
export class UserPageModule {
}
