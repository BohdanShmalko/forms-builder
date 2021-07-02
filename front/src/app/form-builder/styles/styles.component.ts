import { Component, Input } from '@angular/core';
import { ItemInDragDrop } from '../form-builder.component';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['../common.components.scss']
})
export class StylesComponent{
  @Input('currentElement') currentElement?: ItemInDragDrop

}
