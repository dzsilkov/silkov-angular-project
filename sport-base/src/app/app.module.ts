import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptor } from './back-end/back-end.interceptor';
import { ReactiveFormsModule } from '@angular/forms';


import { BaseCatalogModule } from './base-catalog/base-catalog-module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddBaseComponent } from './add-base/add-base.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ArticlesCatalogModule } from './articles-catalog/articles-catalog.module';
import { SliderModule } from './slider/slider.module';
import { TitleComponent } from './title/title.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormInputComponent } from './form-search/components/form-input/form-input.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: { bc: 'Главная' }},
  {path: 'contacts', component: ContactsComponent, data: { bc: 'Контакты' }},
  {path: 'add-base', component: AddBaseComponent, data: { bc: 'Добавить базу' }},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    AddBaseComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    BreadcrumbComponent,
    TitleComponent,
    FormSearchComponent,
    FormInputComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    BaseCatalogModule,
    ArticlesCatalogModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    SliderModule,
    ReactiveFormsModule
  ],

  exports: [
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
}
