import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NotFoundComponent} from "../not-found/not-found.component";
import {AuthGuard} from "../auth/auth.guard";
import {ContactsComponent} from "../shared/components/contacts/contacts.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: 'sport-bases', pathMatch: 'full' },
  {path: 'sport-bases',  loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'catalog',  loadChildren: () => import('../sport-base/sport-bases.module').then(m => m.SportBasesModule)},
  {path: 'auth',  loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)},
  {path: 'articles',  loadChildren: () => import('../articles/articles.module').then(m => m.ArticlesModule)},
  {path: 'contacts', component: ContactsComponent, data: {breadcrumb: 'Контакты'}},
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
