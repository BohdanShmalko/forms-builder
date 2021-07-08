import { Component, Input } from '@angular/core';

import { ItemData } from '../form-builder.component';
import {SetStyle} from "./set-style";

@Component({
  selector: 'app-my-textarea',
  template: `<textarea [required]="setStyles()" [placeholder]="data.placeholder"></textarea>`,
})
export class MyTextareaComponent extends SetStyle {
  @Input('data') data : ItemData;
}
