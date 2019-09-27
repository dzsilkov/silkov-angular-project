import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from './../models/article';

const ARTICLE_API: string = '/api/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleCatalogService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http
      .get(ARTICLE_API)
      .pipe(
        map((response: any) => response.articles)
      )
  }

}
