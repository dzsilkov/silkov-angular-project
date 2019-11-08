import {Injectable} from '@angular/core';
import {SportBasesFirestoreService} from "./sport-bases-firestore.service";
import {SportBasesAppStore} from "./sport-bases-app-store";
import {tap, map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {SportBase} from "../models/sport-base";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class SportBasesService {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fireStore: SportBasesFirestoreService,
    private store: SportBasesAppStore
  ) {
    this.fireStore.collection$().pipe(
      tap(sportBases => {
        console.log(sportBases);
        this.store.patch({
          loading: false,
          sportBases,
          totalSportBases: sportBases.length,
          formStatus: '',
        }, `sportBases collection subscription`)
      })
    ).subscribe()
  }

  get sportBases$(): Observable<SportBase[]> {
    return this.store.state$.pipe(
      map(state => state.loading ? [] : state.sportBases)
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
        return !state.loading && state.sportBases && state.sportBases.length === 0
      })
    )
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(
      map(state => state.formStatus)
    )
  }

  get totalSportBases$(): Observable<number> {
    return this.store.state$.pipe(
      map(state => state.totalSportBases)
    )
  }

  create(sportBase: SportBase) {
    this.store.patch({loading: true, sportBases: [], formStatus: 'Saving...'}, "sportBase create");
    return this.fireStore.create(sportBase)
      .then(_ => {
        this.store.patch({formStatus: 'Saved!'}, "sportBase create SUCCESS");
        setTimeout(() => this.store.patch({formStatus: ''}, "sportBase create timeout reset formStatus"), 2000)
      }).catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "sportBase create ERROR")
      })
  }

  delete(id: string): any {
    this.store.patch({loading: true, sportBases: []}, "sportBase delete");
    return this.fireStore.delete(id)
      .catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "sportBase delete ERROR")
      })
  }

  update(sportBase: SportBase, id: string): any {
    this.store.patch({loading: true, sportBases: []}, "sportBase update");
    return this.fireStore.update(sportBase, id)
      .catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "sportBase update ERROR")
      })
  }

}
