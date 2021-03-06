import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import { effects, reducers } from './reducers/index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument( { maxAge: 25, logOnly: environment.production } ),
    StoreRouterConnectingModule.forRoot(),
  ]
})
export class CoreModule {}
