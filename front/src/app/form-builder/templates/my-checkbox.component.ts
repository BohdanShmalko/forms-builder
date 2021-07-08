import { Component, Input } from '@angular/core';

import { ItemData } from '../form-builder.component';
import {SetStyle} from "./set-style";

@Component({
  selector: 'app-my-checkbox',
  template: `
    <div [ngStyle]="setStyles()">
      <input type="checkbox" id="test-checkbox" name="scales">
      <label for="test-checkbox">Test box</label>
    </div>`,
})
export class MyCheckboxComponent extends SetStyle {
  @Input('data') data : ItemData;
}
