import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {Article} from "../../models/article";
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  article: Article;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticlesService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: any) => {
          return this.articleService.getArticle(params.get('id'))
        }),
      );
      this.route.data
        .subscribe((data: Article) => this.article = data
        );
  }

}
