import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


import { BaseCatalogComponent } from "./containers/base-catalog/base-catalog.component";
import { BaseDescriptionComponent } from "./components/base-description/base-description.component";

import { BaseCatalogCardComponent } from "./components/base-catalog-card/base-catalog-card.component";
import { BaseCatalogService } from "./services/base-catalog.service";

const routes: Routes = [
  {
    path: 'catalog',
    children: [
      { path: '', component: BaseCatalogComponent },
      { path: ':id', component: BaseDescriptionComponent }
    ]
  }
];

@NgModule({
  declarations: [
    BaseCatalogComponent,
    BaseCatalogCardComponent,
    BaseDescriptionComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    BaseCatalogComponent,
  ],

  providers: [
    BaseCatalogService
  ]
})
export class BaseCatalogModule { }
