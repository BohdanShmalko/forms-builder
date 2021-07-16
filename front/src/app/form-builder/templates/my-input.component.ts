import {Component, Input} from '@angular/core';

import { ItemData } from '../form-builder.component';
import { SetStyle } from './set-style';

@Component({
  selector: 'app-my-input',
  template: `<input [required]="data.require"
                    [ngStyle]="setStyles()" [placeholder]="data.placeholder">`,
})
export class MyInputComponent extends SetStyle {
  @Input('data') data: ItemData;
}
