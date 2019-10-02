import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './http.interceptor';


import { BaseCatalogModule } from "./base-catalog/base-catalog-module";

import { AppComponent } from './app.component';
import { HomeComponent } from './sb-home/home.component';
import { NotFoundComponent } from './sb-not-found/not-found.component';
import { ArticlesCatalogComponent } from './articles-catalog/containers/articles-catalog/articles-catalog.component';
import { ArticleCardComponent } from './articles-catalog/components/article-card/article-card.component';
// import { BaseDescriptionComponent } from './base-catalog/containers/base-description/base-description.component';
import { ContactsComponent } from "./contacts/contacts.component";
import { AddBaseComponent } from './add-base/add-base.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleComponent } from './articles-catalog/components/article/article.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'articles',
    children: [
      {path: '', component: ArticlesCatalogComponent},
      {path: ':id', component: ArticleComponent}
    ]
  },
  {path: 'contacts', component: ContactsComponent},
  {path: 'add-base', component: AddBaseComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ArticlesCatalogComponent,
    ArticleCardComponent,
    // BaseDescriptionComponent,
    ContactsComponent,
    AddBaseComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ArticleComponent
  ],

  imports: [
    BrowserModule,
    BaseCatalogModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
