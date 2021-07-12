import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.components';

const routes: Routes = [
  {
    path: '', redirectTo: '/auth/login', component : AuthComponent , pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingAuthModule {
}

export type RouterAuthComponentsType = (typeof RegistrationComponent | typeof LoginComponent | typeof AuthComponent)[];
export const routerAuthComponents: RouterAuthComponentsType = [RegistrationComponent, LoginComponent, AuthComponent];
