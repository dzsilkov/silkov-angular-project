import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Article} from '../models/article';


@Injectable(
  {providedIn: "root"}
)
export class ArticlesService {
private articlesApi: string = '/api/articles';
  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {

    return this.http
      .get<Article[]>(this.articlesApi);
  }

  getArticle(id: number): Observable<Article> {

    return this.http
      .get<Article>(`${this.articlesApi}/${id}`);
  }
}
