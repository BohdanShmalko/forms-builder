import {AfterViewInit, Component, ViewContainerRef, TemplateRef, ViewChild, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Portal, TemplatePortal } from '@angular/cdk/portal';
import { Store } from '@ngrx/store';

import { AuthState } from '@core/reducers/auth/auth.reducers';
import { NotAuthCheck } from '@core/services/auth/not-auth';

export interface ItemInDragDrop {
  item: Portal<any>,
  itemData: ItemData,
}

export interface Styles {
  widthUnit : string,
  heightUnit : string,
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
  require?: boolean,
}

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: [ './form-builder.component.scss' ]
})
export class FormBuilderComponent extends NotAuthCheck implements AfterViewInit, OnInit {

  @ViewChild('myButtonTemplate') myButtonTemplate: TemplateRef<Object>;
  @ViewChild('myCheckboxTemplate') myCheckboxTemplate: TemplateRef<Object>;
  @ViewChild('myInputTemplate') myInputTemplate: TemplateRef<Object>;
  @ViewChild('myTextareaTemplate') myTextareaTemplate: TemplateRef<Object>;
  @ViewChild('mySelectTemplate') mySelectTemplate: TemplateRef<Object>;


  public currentElement?: ItemInDragDrop;
  public buttonData: ItemData = { styles: {widthUnit : 'px', heightUnit : 'px'}, placeholder: 'click me' };
  public checkboxData: ItemData = { styles: {widthUnit : 'px', heightUnit : 'px'} };
  public inputData: ItemData = { styles: {widthUnit : 'px', heightUnit : 'px'}, placeholder: '', require: false };
  public textareaData: ItemData = { styles: {widthUnit : 'px', heightUnit : 'px'}, placeholder: '', require: false };
  public selectData: ItemData = { styles: {widthUnit : 'px', heightUnit : 'px'} };

  public done: ItemInDragDrop[] = [];
  public styled: ItemInDragDrop[] = [];


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

  constructor(private _viewContainerRef: ViewContainerRef, public store$: Store< AuthState >) {
    super()
  }


  public setCurrentItem(item: ItemInDragDrop) {
    this.currentElement = item;
  }

  public ngOnInit() {
    this.checkAuth();
  }

}
