import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


import {ArticleCatalogService} from "../../services/article-catalog.service";
import {SportBase} from "../../../base-catalog/models/sport-base";
import {switchMap, tap} from "rxjs/operators";
import {Article} from "../../models/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private baseCatalogService: ArticleCatalogService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: any) => this.baseCatalogService.getArticle(+params.get('id'))),
        tap(console.log)
      )
      .subscribe((data: SportBase) => this.article = data[0]);
  }

}
