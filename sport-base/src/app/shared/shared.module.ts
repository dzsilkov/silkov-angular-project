import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GoTopComponent} from "./go-top/go-top.component";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {HeaderModule} from "../header/header.module";
import {FooterComponent} from "./footer/footer.component";
import {TitleComponent} from "./title/title.component";


@NgModule({
  declarations: [
    GoTopComponent,
    LoadingSpinnerComponent,
    FooterComponent,
    TitleComponent,

  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    HeaderModule,
    GoTopComponent,
    LoadingSpinnerComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
