import {Component, Input} from '@angular/core';
import {Styles} from '../form-builder.component';

@Component({
  selector: 'app-my-textarea',
  template: `<textarea [ngStyle]="styles" [placeholder]="placeholder"></textarea>`,
})
export class MyTextareaComponent {
  @Input('styles') styles : Styles | null = null;
  @Input('placeholder') placeholder ?: string;
}
