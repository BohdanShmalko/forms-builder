import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {UserPageComponent} from "./user-page.component";

const routes: Routes = [{
  path: '', component: UserPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingUserPageModule {
}

export const routerUserPageComponents = [UserPageComponent]
