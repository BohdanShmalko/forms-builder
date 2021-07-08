import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { AppMaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, AppMaterialModule, FormsModule],
  exports: [...fromComponents.components]
})
export class SharedModule {}
