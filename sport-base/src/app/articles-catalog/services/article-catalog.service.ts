import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import { Article } from '../models/article';
import {SportBase} from "../../base-catalog/models/sport-base";

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

  getArticle(id: number): Observable<SportBase>{
    return this.http
      .get(`${ARTICLE_API}/${id}`)
      .pipe(
        map((response: any) => response.articles.filter((article: Article) => article.id === id)),
        catchError((error: any) => Observable.throw(error.json()))
      )
  }
}
