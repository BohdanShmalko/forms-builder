import {MatButtonModule} from "@angular/material/button";
import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";

const materialComponents = [MatButtonModule, MatCardModule, MatInputModule]

@NgModule({
  imports: [materialComponents, CommonModule],
  exports: materialComponents
})
export class LoginMaterialModule {
}
