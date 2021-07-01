import {NgModule} from "@angular/core";
import {DragDropModule} from "@angular/cdk/drag-drop";

const materialComponents = [DragDropModule]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class FormBuilderMaterialModule {
}
