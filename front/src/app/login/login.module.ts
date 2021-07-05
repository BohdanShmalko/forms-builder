import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

import { MyPipesModule } from '@shared/pipes/my-pipes.module';
import { AppLoginRoutingModule, routerLoginComponents } from './login-routing.module';
import { LoginMaterialModule } from './material.module';

@NgModule({
  declarations: [ routerLoginComponents ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppLoginRoutingModule,
    LoginMaterialModule,
    MyPipesModule,
    ReactiveComponentModule,
  ],
  providers: []
})
export class LoginModule {
}
