import { Component, Input } from '@angular/core';

import { ItemData } from '../form-builder.component';

@Component({
  selector: 'app-my-select',
  template: `
    <select [ngStyle]="{
    width : data.styles.width + data.styles.widthUnit,
    height : data.styles.height + data.styles.heightUnit,
    border : data.styles.border,
    fontSize : data.styles.fontSize,
    fontWeight : data.styles.fontWeight,
    textColor : data.styles.textColor,
    color : data.styles.color
}">
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>`,
})
export class MySelectComponent {
  @Input('data') data : ItemData;
}
