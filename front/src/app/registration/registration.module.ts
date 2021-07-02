import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

import { RegistrationMaterialModule } from './material.module';
import { MyPipesModule } from '../shared/pipes/my-pipes.module';
import { routerRegistrationComponents, RoutingRegistrationModule } from './registration-routing.module';

@NgModule({
  declarations: [ routerRegistrationComponents ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RegistrationMaterialModule,
    RoutingRegistrationModule,
    MyPipesModule,
    ReactiveComponentModule
  ],
  providers: []
})
export class RegistrationModule {
}
