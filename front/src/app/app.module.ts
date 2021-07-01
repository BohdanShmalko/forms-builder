import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routerComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppMaterialModule} from "./material.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthUnloginGuard} from "./shared/auth/auth-unlogin.guard";
import {AuthInterceptorService} from "./shared/auth/auth-interceptor.service";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {effects, reducers} from "./reducers";
import {ReactiveComponentModule} from "@ngrx/component";
import {ValidationErrorPipe} from "./shared/pipes/validation-error.pipe";

@NgModule({
  declarations: [
    AppComponent,
    routerComponents,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    ReactiveComponentModule,
  ],
  providers: [AuthUnloginGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
