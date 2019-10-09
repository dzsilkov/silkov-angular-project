import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { BaseCatalogComponent } from './containers/base-catalog/base-catalog.component';
import { BaseDescriptionComponent } from './containers/base-description/base-description.component';
import { BaseCatalogCardComponent } from './components/base-catalog-card/base-catalog-card.component';
import {BaseCatalogService} from './services/base-catalog.service';
import {BaseCatalogResolve} from './containers/base-catalog/base-catalog.resolve';
import {BaseDescriptionResolve} from './containers/base-description/base-description.resolve';

const routes: Routes = [
  {
    path: 'catalog',
    children: [
      {
        path: '',
        component: BaseCatalogComponent,
        data: {bc: 'Каталог'},
        resolve: {
          base: BaseCatalogResolve
        }
      },
      {
        path: ':id',
        component: BaseDescriptionComponent,
        data: {bc: 'Каталог'},
      },
    ]
  }
];

@NgModule({
  declarations: [
    BaseCatalogComponent,
    BaseCatalogCardComponent,
    BaseDescriptionComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    BaseCatalogComponent,
  ],

  providers: [
    BaseCatalogService,
    BaseCatalogResolve,
    BaseDescriptionResolve
  ]
})
export class BaseCatalogModule { }
