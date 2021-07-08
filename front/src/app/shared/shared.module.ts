import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { AppMaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, AppMaterialModule, FormsModule, ReactiveComponentModule],
  exports: [...fromComponents.components]
})
export class SharedModule {}
