import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [{
  path: '', redirectTo: '/formbuilder', pathMatch: 'full'
}, {
  path: 'formbuilder', loadChildren: () => import('./form-builder/form-builder.module').then(m => m.FormBuilderModule)
}, {
  path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
}, {
  path: 'registration',
  loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
}, {
  path: 'userpage', loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule)
}, {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routerComponents = [PageNotFoundComponent]
