import {MatButtonModule} from "@angular/material/button";
import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

const materialComponents = [MatButtonModule, MatCardModule, MatInputModule]

@NgModule({
  imports: materialComponents,
  exports: materialComponents
})
export class LoginMaterialModule {
}
