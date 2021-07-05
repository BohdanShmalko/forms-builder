import { Component, Input } from '@angular/core';

import { Styles } from '../form-builder.component';

@Component({
  selector: 'app-my-button',
  template: `<button [ngStyle]="styles">click me</button>`,
})
export class MyButtonComponent {
  @Input('styles') styles : Styles | null = null;
}
