import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

import { MyPipesModule } from '@shared/pipes/my-pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { routerAuthComponents, RoutingAuthModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ routerAuthComponents ],
  imports: [
    ReactiveFormsModule,
    MyPipesModule,
    ReactiveComponentModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RoutingAuthModule,
    SharedModule,
    CommonModule
  ],
  providers: []
})
export class AuthModule {
}
