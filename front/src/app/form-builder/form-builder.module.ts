import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';

import { AppFormBuilderRoutingModule, routerFormBuilderComponents } from './form-builder-routing.module';
import { FormBuilderMaterialModule } from './material.module';
import { ElementsComponent } from './elements/elements.component';
import { StylesComponent } from './styles/styles.component';
import { ChangeStylesComponent } from './change-styles/change-styles.component';
import { MyButtonComponent } from './templates/my-button.component';
import { MyInputComponent } from './templates/my-input.component';
import { MyTextareaComponent } from './templates/my-textarea.component';
import { MySelectComponent } from './templates/my-select.component';
import { MyCheckboxComponent } from './templates/my-checkbox.component';

@NgModule({
  declarations: [
    routerFormBuilderComponents,
    ElementsComponent,
    StylesComponent,
    ChangeStylesComponent,
    MyButtonComponent,
    MyInputComponent,
    MyTextareaComponent,
    MySelectComponent,
    MyCheckboxComponent,
  ],
  imports: [
    AppFormBuilderRoutingModule,
    FormBuilderMaterialModule,
    CommonModule,
    PortalModule,
    FormsModule
  ],
  providers: []
})
export class FormBuilderModule {

}
