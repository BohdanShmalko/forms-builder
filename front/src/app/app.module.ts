import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule, routerComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthUnloginGuard } from './shared/auth/auth-unlogin.guard';
import { AuthInterceptorService } from './shared/auth/auth-interceptor.service';
import { environment } from '../environments/environment';
import { effects, reducers } from './reducers';

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
    StoreModule.forRoot( reducers ),
    EffectsModule.forRoot( effects ),
    StoreDevtoolsModule.instrument( { maxAge: 25, logOnly: environment.production } ),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    AuthUnloginGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
