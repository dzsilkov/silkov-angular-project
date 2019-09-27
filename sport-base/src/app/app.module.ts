import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './http.interceptor';


import { BaseCatalogModule } from "./base-catalog/base-catalog-module";

import { AppComponent } from './app.component';
import { HomeComponent } from './sb-home/home.component';
import { NotFoundComponent } from './sb-not-found/not-found.component';
import { BaseCatalogComponent } from "./base-catalog/containers/base-catalog/base-catalog.component";
import { ArticlesCatalogComponent } from './articles-catalog/containers/articles-catalog/articles-catalog.component';
import { ArticleCardComponent } from './articles-catalog/components/article-card/article-card.component';
import { BaseDescriptionComponent } from './base-catalog/containers/base-description/base-description.component';


const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  // { path: 'catalog', component: BaseCatalogComponent },
  { path: 'articles', component: ArticlesCatalogComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ArticlesCatalogComponent,
    ArticleCardComponent,
    BaseDescriptionComponent,
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
