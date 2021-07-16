import { Component, Input } from '@angular/core';

import { ItemData } from '../form-builder.component';
import { SetStyle } from './set-style';

@Component({
  selector: 'app-my-button',
  template: `
    <button [ngStyle]="setStyles()">{{ data.placeholder }}</button>`,
})
export class MyButtonComponent extends SetStyle {
  @Input('data') data: ItemData;
}
