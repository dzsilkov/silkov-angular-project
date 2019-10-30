import {Routes} from "@angular/router";

import {AuthGuard} from "../../auth/auth.guard";
import {ArticlesCatalogComponent} from "../components/articles-catalog/articles-catalog.component";
import {AddArticleComponent} from "../components/add-article/add-article.component";
import {ArticleEditComponent} from "../components/article-edit/article-edit.component";
import {ArticlesComponent} from "../containers/articles/articles.component";
import {ArticleDetailComponent} from "../components/article-detail/article-detail.component";

export const articlesRoutes: Routes = [
  {
    path: '', component: ArticlesComponent,
    children: [
      {path: '', component: ArticlesCatalogComponent, data: {breadcrumb: 'Статьи'}},
      {path: ':id', component: ArticleDetailComponent, data: {breadcrumb: 'Статья'}},
      {
        path: 'add-article',
        component: AddArticleComponent,
        data: {breadcrumb: 'Добавить статью'},
        canActivate: [AuthGuard]
      },
      {
        path: ':id/edit',
        component: ArticleEditComponent,
        data: {breadcrumb: `Edit`},
      }
    ]
  }
];
