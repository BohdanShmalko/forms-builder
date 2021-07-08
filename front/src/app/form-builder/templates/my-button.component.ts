import {Component, Input} from '@angular/core';

import {ItemData} from '../form-builder.component';

@Component({
  selector: 'app-my-button',
  template: `
    <button [ngStyle]="{
    width : data.styles.width + data.styles.widthUnit,
    height : data.styles.height + data.styles.heightUnit,
    border : data.styles.border,
    fontSize : data.styles.fontSize,
    fontWeight : data.styles.fontWeight,
    textColor : data.styles.textColor,
    color : data.styles.color
}">{{ data.placeholder }}</button>`,
})
export class MyButtonComponent {
  @Input('data') data: ItemData;
}
