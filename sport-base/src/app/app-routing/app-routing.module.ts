import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NotFoundComponent} from "../not-found/not-found.component";
import {ArticlesCatalogModule} from "../articles-catalog/articles-catalog.module";
import {ContactsComponent} from "../contacts/contacts.component";
import {HomeComponent} from "../home/home.component";

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: {breadcrumb: 'Главная'}},
  {path: 'contacts', component: ContactsComponent, data: {breadcrumb: 'Контакты'}},
  // {path: 'add-base', component: AddBaseComponent, data: { bc: 'Добавить базу' }},
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: HomeComponent, data: {breadcrumb: 'Главная'}},
  {path: '**', component: NotFoundComponent, data: {breadcrumb: 'NotFound'}}
];

@NgModule({
  declarations: [
    NotFoundComponent,
  ],

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ArticlesCatalogModule,
  ],
  exports: [
    RouterModule,
    NotFoundComponent,
  ]

})
export class AppRoutingModule {
}
