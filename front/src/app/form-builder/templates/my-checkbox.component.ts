import { Component, Input } from '@angular/core';
import { Styles } from '../form-builder.component';

@Component({
  selector: 'app-my-checkbox',
  template: `
    <div [ngStyle]="styles">
      <input type="checkbox" id="test-checkbox" name="scales">
      <label for="test-checkbox">Test box</label>
    </div>`,
})
export class MyCheckboxComponent {
  @Input('styles') styles: Styles | null = null;
}
