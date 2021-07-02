import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {FormBuilderComponent} from './form-builder.component';

const routes: Routes = [
  {
    path: '', component: FormBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppFormBuilderRoutingModule {
}

export type RouterFormBuilderComponentsType = (typeof FormBuilderComponent)[];
export const routerFormBuilderComponents : RouterFormBuilderComponentsType = [FormBuilderComponent];
