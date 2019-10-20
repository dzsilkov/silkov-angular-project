import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import {CatalogItemComponent} from "./components/catalog-item/catalog-item.component";
import {SportBaseService} from "./sport-base.service";
import {BaseCatalogComponent} from "./containers/base-catalog/base-catalog.component";
import {SportBaseDetailComponent} from "./containers/sport-base-detail/sport-base-detail.component";

const routes: Routes = [
  {
    path: 'catalog',
    children: [
      {
        path: '',
        component: BaseCatalogComponent,
        data: {breadcrumb: 'Каталог'},
      },
      {
        path: ':id',
        component: SportBaseDetailComponent,
        data: {breadcrumb: `Каталог`},
      },
    ]
  }
];

@NgModule({
  declarations: [
    BaseCatalogComponent,
    CatalogItemComponent,
    SportBaseDetailComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  providers: [
  ]
})
export class SportBaseModule { }
