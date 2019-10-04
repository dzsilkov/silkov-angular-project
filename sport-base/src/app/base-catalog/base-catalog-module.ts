import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";


import { BaseCatalogComponent } from "./containers/base-catalog/base-catalog.component";
import { BaseDescriptionComponent } from "./components/base-description/base-description.component";
import { TitleComponent } from '../title/title.component';


import { BaseCatalogCardComponent } from "./components/base-catalog-card/base-catalog-card.component";
import { BaseCatalogService } from "./services/base-catalog.service";

const routes: Routes = [
  {
    path: 'catalog',
    children: [
      { path: '', component: BaseCatalogComponent, data: { bc: 'Каталог' }},
      { path: ':id', component: BaseDescriptionComponent }
    ]
  }
];

@NgModule({
  declarations: [
    BaseCatalogComponent,
    BaseCatalogCardComponent,
    BaseDescriptionComponent,
    TitleComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [
    BaseCatalogComponent,
    TitleComponent
  ],

  providers: [
    BaseCatalogService
  ]
})
export class BaseCatalogModule { }
