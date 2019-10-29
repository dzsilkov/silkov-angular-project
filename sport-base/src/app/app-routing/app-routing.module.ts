import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NotFoundComponent} from "../not-found/not-found.component";
import {ArticlesCatalogModule} from "../articles-catalog/articles-catalog.module";
import {ContactsComponent} from "../contacts/contacts.component";
import {HomeComponent} from "../home/home.component";
import {AuthGuard} from "../auth/auth.guard";

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: {breadcrumb: 'Главная'}},

  {path: 'catalog',  loadChildren: () => import('../sport-base/sport-bases.module').then(m => m.SportBasesModule)},
  {path: 'contacts', component: ContactsComponent, data: {breadcrumb: 'Контакты'}},
  {path: '', component: HomeComponent, data: {breadcrumb: 'Главная'}},
  {path: 'auth',  loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},

  {path: '**', component: NotFoundComponent, data: {breadcrumb: 'NotFound'}}
];

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ArticlesCatalogModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    AuthGuard,
  ]
})
export class AppRoutingModule {
}
