import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

export type MaterialsAppType = (typeof MatToolbarModule | typeof MatIconModule | typeof MatButtonModule)[];

const materialComponents: MaterialsAppType = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class AppMaterialModule {
}
