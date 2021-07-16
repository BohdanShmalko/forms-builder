import { Component, Input } from '@angular/core';

import { ItemData } from '../form-builder.component';
import { SetStyle } from './set-style';

@Component({
  selector: 'app-my-select',
  template: `
    <select [ngStyle]="setStyles()">
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>`,
})
export class MySelectComponent extends SetStyle {
  @Input('data') data : ItemData;
}
