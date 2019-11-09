import {Injectable} from '@angular/core';
import {tap, map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleStoreService} from "./article-store.service";
import {ArticleFirestoreService} from "./article-firestore.service";
import {Article} from "../models/article";

@Injectable()
export class ArticlesService {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fireStore: ArticleFirestoreService,
    private store: ArticleStoreService
  ) {
    this.fireStore.collection$().pipe(
      tap(articles => {
        this.store.patch({
          loading: false,
          articles,
          totalArticles: articles.length,
          formStatus: '',
        }, `articles collection subscription`)
      })
    ).subscribe()
  }

  get articles$(): Observable<Article[]> {
    return this.store.state$.pipe(
      map(state => state.loading ? [] : state.articles)
    )
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => state.loading)
    )
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => {
        return !state.loading && state.articles && state.articles.length === 0
      })
    )
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(
      map(state => state.formStatus)
    )
  }

  get totalArticles$(): Observable<number> {
    return this.store.state$.pipe(
      map(state => state.totalArticles)
    )
  }

  create(article: Article) {
    this.store.patch({loading: true, articles: [], formStatus: 'Saving...'}, "article create");
    return this.fireStore.create(article)
      .then(_ => {
        this.store.patch({formStatus: 'Saved!'}, "article create SUCCESS");
        setTimeout(() => this.store.patch({
          loading: false,
          formStatus: ''
        }, "article create timeout reset formStatus"), 2000)
      }).catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "article create ERROR")
      })
  }

  delete(id: string): any {
    this.store.patch({loading: true, articles: []}, "article delete");
    return this.fireStore.delete(id)
      .catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "article delete ERROR")
      })
  }

  update(article: Article, id: string): any {
    this.store.patch({loading: true, articles: []}, "article update");
    return this.fireStore.update(article, id)
      .catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "article update ERROR")
      })
  }

  getArticle(id: string): Observable<Article> {
    return this.fireStore.doc$(id)
  }

}
