import {Injectable} from '@angular/core';
import {Store} from "../../core/services/store";
import {ArticleApp} from "../states/articleApp";

@Injectable()
export class ArticleStoreService extends Store<ArticleApp> {
  protected store: string = 'article-app';

  constructor() {
    super({
      loading: true,
      articles: [],
      totalArticles: 0,
    })
  }
}
