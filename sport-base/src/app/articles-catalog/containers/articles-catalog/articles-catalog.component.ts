import { Component, OnInit } from '@angular/core';

import {Article} from "../../models/article";
import {ArticleCatalogService} from "../../services/article-catalog.service";

@Component({
  selector: 'app-articles-catalog',
  templateUrl: './articles-catalog.component.html',
  styleUrls: ['./articles-catalog.component.css']
})

export class ArticlesCatalogComponent implements OnInit {

  articles: Article[];
  constructor(private articleService: ArticleCatalogService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe((data: Article[]) => this.articles = data);
    console.log(this.articles)
  }
}
