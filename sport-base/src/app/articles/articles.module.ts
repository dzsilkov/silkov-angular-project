import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ArticlesComponent} from './containers/articles/articles.component';
import {AddArticleComponent} from './components/add-article/add-article.component';
import {ArticleEditComponent} from './components/article-edit/article-edit.component';
import {ArticleCardComponent} from "./components/article-card/article-card.component";
import {ArticleDetailComponent} from "./components/article-detail/article-detail.component";
import {ArticlesCatalogComponent} from "./components/articles-catalog/articles-catalog.component";
import {ArticleRoutingModule} from "./article-routing/article-routing.module";


@NgModule({
  declarations: [
    ArticlesComponent,
    AddArticleComponent,
    ArticleEditComponent,
    ArticleCardComponent,
    ArticleDetailComponent,
    ArticlesCatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArticleRoutingModule
  ],
  providers: [
  ]
})
export class ArticlesModule {
}
