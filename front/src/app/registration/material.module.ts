import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

export type MaterialRegistrationType = (typeof MatButtonModule | typeof MatCardModule | typeof MatInputModule)[];

const materialComponents: MaterialRegistrationType = [ MatButtonModule, MatCardModule, MatInputModule ];

@NgModule({
  imports: materialComponents,
  exports: materialComponents
})
export class RegistrationMaterialModule {
}
