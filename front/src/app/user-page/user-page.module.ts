import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveComponentModule} from '@ngrx/component';

import {routerUserPageComponents, RoutingUserPageModule} from './user-page-routing.module';

@NgModule({
  declarations: [routerUserPageComponents],
  imports: [RoutingUserPageModule, CommonModule, ReactiveComponentModule],
  providers: []
})
export class UserPageModule {
}
