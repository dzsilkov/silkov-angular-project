import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NotFoundComponent} from "../not-found/not-found.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {AuthGuard} from "../auth/auth.guard";
import {DashboardComponent} from "../dashboard/dashboard.component";

export const appRoutes: Routes = [
  {path: '', component: DashboardComponent, data: {breadcrumb: 'Главная'}},
  {path: 'sport-bases',  loadChildren: () => import('../sport-base/sport-bases.module').then(m => m.SportBasesModule)},
  {path: 'auth',  loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
  {path: 'articles',  loadChildren: () => import('../articles/articles.module').then(m => m.ArticlesModule)},
  {path: 'contacts', component: ContactsComponent, data: {breadcrumb: 'Контакты'}},
  {path: '', component: DashboardComponent, data: {breadcrumb: 'Главная'}},
  {path: '**', component: NotFoundComponent, data: {breadcrumb: 'NotFound'}}
];

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
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
