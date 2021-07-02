import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemInDragDrop } from "../form-builder.component";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: [ '../common.components.scss' ]
})
export class ElementsComponent {
  @Input('done') done: ItemInDragDrop[] = [];
  @Output() doneEvent = new EventEmitter<CdkDragDrop<ItemInDragDrop[]>>();

  public toParent(event : CdkDragDrop<ItemInDragDrop[]>): void {
    this.doneEvent.emit(event)
  }
}
