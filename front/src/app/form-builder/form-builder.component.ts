import {AfterViewInit, Component, ViewContainerRef, TemplateRef, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Portal, TemplatePortal} from "@angular/cdk/portal";

export interface ItemInDragDrop { //TODO
  item: Portal<any>,
  styles: {
    width: string,
    height: string,
    border: string,
    fontSize: string,
    fontWeight: string,
    textColor: string
  }
  placeholder: string
  require: string
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements AfterViewInit {
  // @ts-ignore
  @ViewChild('myButtonTemplate') myButtonTemplate: TemplateRef<unknown>;
  // @ts-ignore
  @ViewChild('myCheckboxTemplate') myCheckboxTemplate: TemplateRef<unknown>;
  // @ts-ignore
  @ViewChild('myInputTemplate') myInputTemplate: TemplateRef<unknown>;
  // @ts-ignore
  @ViewChild('myTextareaTemplate') myTextareaTemplate: TemplateRef<unknown>;
  // @ts-ignore
  @ViewChild('mySelectTemplate') mySelectTemplate: TemplateRef<unknown>;

  done: Portal<any>[] = []

  styled: Portal<any>[] = []

  drop(event: CdkDragDrop<any>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  constructor(private _viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit() {
    this.done[0] = new TemplatePortal(this.myButtonTemplate, this._viewContainerRef)
    this.done[1] = new TemplatePortal(this.myCheckboxTemplate, this._viewContainerRef)
    this.done[2] = new TemplatePortal(this.myInputTemplate, this._viewContainerRef)
    this.done[3] = new TemplatePortal(this.myTextareaTemplate, this._viewContainerRef)
    this.done[4] = new TemplatePortal(this.mySelectTemplate, this._viewContainerRef)
  }

}
