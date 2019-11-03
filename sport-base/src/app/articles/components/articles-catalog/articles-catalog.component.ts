import { Component, OnInit } from '@angular/core';

import {Article} from '../../models/article';
import {ArticlesService} from '../../services/articles.service';

@Component({
  selector: 'app-articles-catalog',
  templateUrl: './articles-catalog.component.html',
  styleUrls: ['./articles-catalog.component.css']
})

export class ArticlesCatalogComponent implements OnInit {

  articles: Article[];
  title = 'Статьи';

  constructor(private articleService: ArticlesService) {}

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe((data: Article[]) => this.articles = data);
    console.log(this.articles);
  }
}