import {Injectable} from '@angular/core';
import {tap, map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {ArticleFirestoreService} from "./article-firestore.service";
import {Article} from "../models/article";
import {AppStore} from "../../core/services/app-store";

@Injectable()
export class ArticlesService {
  constructor(
    private fireStore: ArticleFirestoreService,
    private store: AppStore
  ) {
    this.fireStore.collection$().pipe(
      tap(n => this.store.set('loading', true)),
      tap(articles => this.store.set('articles', articles)),
      tap(n => this.store.set('loading', false)),
    ).subscribe();
  }
  get articles$(): Observable<Article[]> {
    return this.store.select('articles');
    }
  }
