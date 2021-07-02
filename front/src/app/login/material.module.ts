import {MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

export type MaterialsLoginType = (typeof MatButtonModule | typeof MatCardModule | typeof MatInputModule)[];
const materialLoginComponents: MaterialsLoginType = [MatButtonModule, MatCardModule, MatInputModule];

@NgModule({
  imports: [materialLoginComponents],
  exports: materialLoginComponents
})
export class LoginMaterialModule {
}
