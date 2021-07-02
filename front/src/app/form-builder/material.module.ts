import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop";

export type MaterialFormBuilderType = (typeof DragDropModule)[];
const materialComponents: MaterialFormBuilderType = [ DragDropModule ]

@NgModule({
  imports: [ materialComponents ],
  exports: [ materialComponents ]
})
export class FormBuilderMaterialModule {
}
