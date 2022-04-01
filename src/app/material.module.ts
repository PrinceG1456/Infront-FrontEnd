import {MatButtonModule} from "@angular/material/button";

import {MatSliderModule} from "@angular/material/slider";
import { NgModule } from "@angular/core";

const materialModules =  [MatButtonModule, MatSliderModule, ];

@NgModule({
  imports: [],
  exports: materialModules,
})
export class MaterialModule{}