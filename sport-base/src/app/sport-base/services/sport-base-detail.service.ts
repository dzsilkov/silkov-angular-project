import {Injectable} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {SportBasesFirestoreService} from "./sport-bases-firestore.service";
import {map, switchMap, tap} from "rxjs/operators";
import {SportBase} from "../models/sport-base";
import {SportBaseDetailStore} from "./sport-base-detail-store";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable()
export class SportBaseDetailService {

  constructor(
    private fireStore: SportBasesFirestoreService,
    private store: SportBaseDetailStore,
  ) {
    this.fireStore.doc$(params.get(+'id')).pipe(
      tap(sportBase => {
        this.store.patch({
          loading: false,
          sportBase,
          positiveComments: sportBase.positiveComments.length,
          negativeComments: sportBase.negativeComments.length,
          sports: sportBase.sports,
          images: sportBase.images,
          formStatus: '',
        }, `sportBase ${sportBase.name} subscription`)
      })
    ).subscribe()
  }

  doc$(id) {
    this.fireStore.doc$(id).pipe(
      tap(sportBase => {
        this.store.patch({
          loading: false,
          sportBase,
          positiveComments: sportBase.positiveComments.length,
          negativeComments: sportBase.negativeComments.length,
          sports: sportBase.sports,
          images: sportBase.images,
          formStatus: '',
        }, `sportBase ${sportBase.name} subscription`)
      })
    ).subscribe()
  }

  get sportBase$(): Observable<SportBase> {
    return this.store.state$.pipe(
      map(state => state.loading ? {} : state.sportBase)
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
        return !state.loading && state.sportBase && state.sportBase === null
      })
    )
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(
      map(state => state.formStatus)
    )
  }

  get positiveComments$(): Observable<number> {
    return this.store.state$.pipe(
      map(state => state.positiveComments)
    )
  }

  get negativeComments$(): Observable<number> {
    return this.store.state$.pipe(
      map(state => state.negativeComments)
    )
  }

  get sports$(): Observable<string[]> {
    return this.store.state$.pipe(
      map(state => state.sports)
    )
  }

  get images$(): Observable<string[]> {
    return this.store.state$.pipe(
      map(state => state.images)
    )
  }

  create(sportBase: SportBase) {
    this.store.patch({loading: true, sportBase: {}, formStatus: 'Saving...'}, "sportBase create");
    return this.fireStore.create(sportBase)
      .then(_ => {
        this.store.patch({formStatus: 'Saved!'}, "sportBase create SUCCESS");
        setTimeout(() => this.store.patch({formStatus: ''}, "sportBase create timeout reset formStatus"), 2000)
      }).catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "sportBase create ERROR")
      })
  }

  delete(id: string): any {
    this.store.patch({loading: true, sportBase: {}}, "sportBase delete");
    return this.fireStore.delete(id)
      .catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "sportBase delete ERROR")
      })
  }

  update(sportBase: SportBase, id: string): any {
    this.store.patch({loading: true, sportBase: {}}, "sportBase update");
    return this.fireStore.update(sportBase, id)
      .catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "sportBase update ERROR")
      })
  }
}
