import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesCatalogComponent } from './containers/articles-catalog/articles-catalog.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticleComponent } from './components/article/article.component';

import {ArticleCatalogService} from './services/article-catalog.service';

const routes: Routes = [
  {
    path: 'articles',
    children: [
      {path: '', component: ArticlesCatalogComponent, data: { breadcrumb: 'Статьи' }},
      {path: ':id', component: ArticleComponent, data: {breadcrumb: ':id'}}
    ]
  },
];

@NgModule({
  declarations: [
    ArticlesCatalogComponent,
    ArticleCardComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ArticleCatalogService
  ]
})
export class ArticlesCatalogModule { }
