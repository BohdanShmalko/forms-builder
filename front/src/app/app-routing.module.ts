import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { AuthUnloginGuard } from '@core/services/auth/auth-unlogin.guard';

const routes: Routes = [
  {
    path: '', redirectTo: '/formbuilder', pathMatch: 'full'
  },
  {
    path: 'formbuilder',
    loadChildren: () => import('./form-builder/form-builder.module').then(m => m.FormBuilderModule),
    canActivate: [AuthUnloginGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'userpage',
    loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule),
    canActivate: [AuthUnloginGuard]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

