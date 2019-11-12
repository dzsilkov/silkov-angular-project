import {Component, OnInit} from '@angular/core';

import {Article} from '../../models/article';
import {ArticlesService} from '../../services/articles.service';
import {Observable} from "rxjs/internal/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {AppStore} from "../../../core/services/app-store";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-articles-catalog',
  templateUrl: './articles-catalog.component.html',
  styleUrls: ['./articles-catalog.component.css']
})

export class ArticlesCatalogComponent implements OnInit {

  loading$: Observable<boolean>;
  articles$: Observable<Article[]>;
  noResults$: Observable<boolean>;

  constructor(
    private store: AppStore,
    private articlesService: ArticlesService
  ) {
  }

  ngOnInit() {
    this.articles$ = this.articlesService.articles$;
    // this.loading$ = this.articlesService.loading$;
    // this.noResults$ = this.articlesService.noResults$;
    // this.articles$ = this.articlesService.articles$;
  }
}
