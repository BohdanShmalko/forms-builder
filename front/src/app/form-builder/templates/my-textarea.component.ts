import { Component, Input } from '@angular/core';

import { ItemData } from '../form-builder.component';

@Component({
  selector: 'app-my-textarea',
  template: `<textarea [required]="data.require" [ngStyle]="{
    width : data.styles.width + data.styles.widthUnit,
    height : data.styles.height + data.styles.heightUnit,
    border : data.styles.border,
    fontSize : data.styles.fontSize,
    fontWeight : data.styles.fontWeight,
    textColor : data.styles.textColor,
    color : data.styles.color
}" [placeholder]="data.placeholder"></textarea>`,
})
export class MyTextareaComponent {
  @Input('data') data : ItemData;
}
