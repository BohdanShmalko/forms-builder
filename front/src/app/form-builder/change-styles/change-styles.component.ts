import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemInDragDrop } from "../form-builder.component";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-change-styles',
  templateUrl: './change-styles.component.html',
  styleUrls: [ '../common.components.scss' ]
})
export class ChangeStylesComponent {
  @Input('styled') styled: ItemInDragDrop[] = [];
  @Output() dropEvent = new EventEmitter<CdkDragDrop<ItemInDragDrop[]>>();
  @Output() setItemEvent = new EventEmitter<ItemInDragDrop>();

  public toParentDrop(event : CdkDragDrop<ItemInDragDrop[]>): void {
    this.dropEvent.emit( event )
  }
  public toParentItem(item : ItemInDragDrop): void {
    this.setItemEvent.emit( item )
  }
}
