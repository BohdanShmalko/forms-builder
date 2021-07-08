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

  public buttonData: ItemData = this.dataFactory('click me');
  public checkboxData: ItemData = this.dataFactory();
  public inputData: ItemData = this.dataFactory('', true);
  public textareaData: ItemData = this.dataFactory('', true);
  public selectData: ItemData = this.dataFactory();

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
    const allTemplates: ( TemplateRef<Object> )[] = [
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

  private dataFactory(placeholder : string | undefined = undefined, useRequire : boolean = false) : ItemData {
    const styles: Styles = {widthUnit : 'px', heightUnit : 'px'};
    const require: boolean | undefined = useRequire ? false : undefined;
    return { styles, placeholder, require };
  }

  public setCurrentItem(item: ItemInDragDrop) {
    this.currentElement = item;
  }

  public ngOnInit() {
    this.checkAuth();
  }

}
