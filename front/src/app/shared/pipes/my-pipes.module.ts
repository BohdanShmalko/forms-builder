import {NgModule} from "@angular/core";
import {ValidationErrorPipe} from "./validation-error.pipe";

const myPipes = [ValidationErrorPipe]

@NgModule({
  declarations: [myPipes],
  exports: [myPipes]
})
export class MyPipesModule {
}
