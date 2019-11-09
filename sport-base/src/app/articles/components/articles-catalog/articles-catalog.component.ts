import {Component, OnInit} from '@angular/core';

import {Article} from '../../models/article';
import {ArticlesService} from '../../services/articles.service';
import {Observable} from "rxjs/internal/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {SportBasesService} from "../../../sport-base/services/sport-bases.service";

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
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.loading$ = this.articlesService.loading$;
    this.noResults$ = this.articlesService.noResults$;
    this.articles$ = this.articlesService.articles$;
  }
}
