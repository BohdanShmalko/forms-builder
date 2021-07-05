import { AfterViewInit, Component, ViewContainerRef, TemplateRef, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Portal, TemplatePortal } from '@angular/cdk/portal';

export interface ItemInDragDrop {
  item: Portal<any>,
  itemData: ItemData,
}

export interface Styles {
  width?: string,
  height?: string,
  border?: string,
  fontSize?: string,
  fontWeight?: string,
  textColor?: string,
  color?: string,
}

export interface ItemData {
  styles: Styles,
  placeholder?: string,
  require?: string,
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: [ './form-builder.component.scss' ]
})
export class FormBuilderComponent implements AfterViewInit {

  @ViewChild('myButtonTemplate') myButtonTemplate: TemplateRef<Object>;
  @ViewChild('myCheckboxTemplate') myCheckboxTemplate: TemplateRef<Object>;
  @ViewChild('myInputTemplate') myInputTemplate: TemplateRef<Object>;
  @ViewChild('myTextareaTemplate') myTextareaTemplate: TemplateRef<Object>;
  @ViewChild('mySelectTemplate') mySelectTemplate: TemplateRef<Object>;


  public currentElement?: ItemInDragDrop;
  public buttonData: ItemData = { styles: {} };
  public checkboxData: ItemData = { styles: {} };
  public inputData: ItemData = { styles: {}, placeholder: '' };
  public textareaData: ItemData = { styles: {}, placeholder: '' };
  public selectData: ItemData = { styles: {} };

  public done: ItemInDragDrop[] = [];
  public styled: ItemInDragDrop[] = [];

  constructor(private _viewContainerRef: ViewContainerRef) {
  }

  public drop(event: CdkDragDrop<ItemInDragDrop[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      for ( let item of this.done ) {
        if (this.currentElement === item) {
          this.currentElement = undefined
          break;
        }
      }
    }
  }

  public ngAfterViewInit(): void {
    const allTemplates: ( TemplateRef<unknown> )[] = [
      this.myButtonTemplate,
      this.myCheckboxTemplate,
      this.myInputTemplate,
      this.myTextareaTemplate,
      this.mySelectTemplate,
    ];
    const allData: ItemData[] = [
      this.buttonData,
      this.checkboxData,
      this.inputData,
      this.textareaData,
      this.selectData,
    ];
    for (let i: number = 0; i < allData.length; i++) {

        this.done[ i ] = {
          item: new TemplatePortal(allTemplates[ i ], this._viewContainerRef),
          itemData: allData[ i ]
        };


    }
  }

  public setCurrentItem(item: ItemInDragDrop) {
    this.currentElement = item;
  }

}
