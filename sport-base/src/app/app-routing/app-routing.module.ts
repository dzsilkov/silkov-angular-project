import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";

import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { NotFoundComponent} from "../not-found/not-found.component";
import { DashBoardComponent} from "../dashboard/dashboard.component";
import { BaseCatalogModule} from "../base-catalog/base-catalog-module";

export const appRoutes: Routes = [
  {path: '', component: DashBoardComponent, data: { breadcrumb: 'Главная' }},
  // {path: 'contacts', component: ContactsComponent, data: { bc: 'Контакты' }},
  // {path: 'add-base', component: AddBaseComponent, data: { bc: 'Добавить базу' }},
  {path: '**', component: NotFoundComponent, data: { breadcrumb: 'NotFound' }}
];

@NgModule({
  declarations: [
    NotFoundComponent,
    DashBoardComponent,
    LoadingSpinnerComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    BaseCatalogModule,

  ],
  exports: [
    RouterModule,
    NotFoundComponent,
    DashBoardComponent,
  ]

})
export class AppRoutingModule { }
