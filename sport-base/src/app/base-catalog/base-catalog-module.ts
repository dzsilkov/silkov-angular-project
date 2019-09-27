import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BaseCatalogComponent } from "./containers/base-catalog/base-catalog.component";
import { BaseCatalogCardComponent } from "./components/base-catalog-card/base-catalog-card.component";
import {BaseCatalogService} from "./services/base-catalog.service";



@NgModule({
  declarations: [
    BaseCatalogComponent,
    BaseCatalogCardComponent
  ],

  imports: [
    CommonModule,
  ],

  exports: [
    BaseCatalogComponent
  ],

  providers: [
    BaseCatalogService
  ]
})
export class BaseCatalogModule { }
