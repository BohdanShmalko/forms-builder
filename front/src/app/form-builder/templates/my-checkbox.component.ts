import { Component, Input } from '@angular/core';

import { ItemData } from '../form-builder.component';

@Component({
  selector: 'app-my-checkbox',
  template: `
    <div [ngStyle]="{
    width : data.styles.width + data.styles.widthUnit,
    height : data.styles.height + data.styles.heightUnit,
    border : data.styles.border,
    fontSize : data.styles.fontSize,
    fontWeight : data.styles.fontWeight,
    textColor : data.styles.textColor,
    color : data.styles.color
}">
      <input type="checkbox" id="test-checkbox" name="scales">
      <label for="test-checkbox">Test box</label>
    </div>`,
})
export class MyCheckboxComponent {
  @Input('data') data : ItemData;
}
