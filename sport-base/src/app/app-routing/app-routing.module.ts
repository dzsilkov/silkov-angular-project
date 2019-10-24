import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {NotFoundComponent} from "../not-found/not-found.component";
import {ArticlesCatalogModule} from "../articles-catalog/articles-catalog.module";
import {ContactsComponent} from "../contacts/contacts.component";
import {HomeComponent} from "../home/home.component";
import {AddBaseComponent} from "../add-base/add-base.component";
import {LoginComponent} from "../auth/login/login.component";
import {SignupComponent} from "../auth/signup/signup.component";
import {AuthGuard} from "../auth/auth.guard";
import {BaseCatalogComponent} from "../sport-base/containers/base-catalog/base-catalog.component";
import {SportBaseDetailComponent} from "../sport-base/containers/sport-base-detail/sport-base-detail.component";

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: {breadcrumb: 'Главная'}},
  {path: 'login', component: LoginComponent, data: {breadcrumb: 'log in'}},
  {path: 'signup', component: SignupComponent, data: {breadcrumb: 'sign up'}},
  {path: 'catalog',
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
  },
  {path: 'contacts', component: ContactsComponent, data: {breadcrumb: 'Контакты'}},
  {path: 'add-base', component: AddBaseComponent, data: { breadcrumb: 'Добавить базу'}, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, data: {breadcrumb: 'Главная'}},
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
