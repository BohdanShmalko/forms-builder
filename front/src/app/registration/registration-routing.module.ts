import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration.component';

const routes: Routes = [{
  path: '', component: RegistrationComponent
}];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class RoutingRegistrationModule {
}

export type RouterRegistrationComponentsType = ( typeof RegistrationComponent )[];
export const routerRegistrationComponents: RouterRegistrationComponentsType = [ RegistrationComponent ];
