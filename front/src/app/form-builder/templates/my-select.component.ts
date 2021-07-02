import {Component, Input} from '@angular/core';
import {Styles} from '../form-builder.component';

@Component({
  selector: 'app-my-select',
  template: `
    <select [ngStyle]="styles">
      <option>Пункт 1</option>
      <option>Пункт 2</option>
    </select>`,
})
export class MySelectComponent {
  @Input('styles') styles: Styles | null = null;
}
