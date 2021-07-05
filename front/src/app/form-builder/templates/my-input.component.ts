import { Component, Input } from '@angular/core';

import { Styles } from '../form-builder.component';

@Component({
  selector: 'app-my-input',
  template: `<input required [ngStyle]="styles" [placeholder]="placeholder">`,
})
export class MyInputComponent {
  @Input('styles') styles : Styles | null = null;
  @Input('placeholder') placeholder ?: string;
}
