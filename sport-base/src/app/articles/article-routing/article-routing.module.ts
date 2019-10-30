import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import {articlesRoutes} from "./articles-routes";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
