import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoTopComponent} from "../go-top/go-top.component";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";


@NgModule({
  declarations: [
    GoTopComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule {
}
