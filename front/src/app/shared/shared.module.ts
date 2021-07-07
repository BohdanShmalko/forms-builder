import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { AppMaterialModule } from './material.module';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, AppMaterialModule],
  exports: [...fromComponents.components]
})
export class SharedModule {}
