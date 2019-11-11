import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {SlidesFirestoreService} from "./slides-firestore.service";
import {DashboardStore} from "./dashboard-store";
import {Slide} from "../models/slide";
import {AppStore} from "../../core/services/app-store";

@Injectable()
export class DashboardService {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fireStore: SlidesFirestoreService,
    private store: AppStore
  ) {
    this.fireStore.collection$().pipe(
      tap(() => this.store.set('loading', true)),
      tap(slides => this.store.set('slides', slides)),
      tap(() => this.store.set('loading', false)),
    ).subscribe();
  }

  // getSlides$ = this.fireStore.collection$().pipe(
  //   tap(slides => this.store.set('slides', slides))
  // );

  get slides$(): Observable<Slide[]> {
    return this.store.select('slides')
  }
  //
  // get loading$(): Observable<boolean> {
  //   return this.store.state$.pipe(
  //     map(state => state.loading)
  //   )
  // }
  //
  // get noResults$(): Observable<boolean> {
  //   return this.store.state$.pipe(
  //     map(state => {
  //       return !state.loading && state.slides && state.slides.length === 0
  //     })
  //   )
  // }
  //
  // get formStatus$(): Observable<string> {
  //   return this.store.state$.pipe(
  //     map(state => state.formStatus)
  //   )
  // }
  //
  // get totalSlides$(): Observable<number> {
  //   return this.store.state$.pipe(
  //     map(state => state.totalSlides)
  //   )
  // }
  //
  // create(slide: Slide) {
  //   this.store.patch({loading: true, slides: [], formStatus: 'Saving...'}, "slides create");
  //   return this.fireStore.create(slide)
  //     .then(_ => {
  //       this.store.patch({formStatus: 'Saved!'}, "slide create SUCCESS");
  //       setTimeout(() => this.store.patch({formStatus: ''}, "slide create timeout reset formStatus"), 2000)
  //     }).catch(err => {
  //       this.store.patch({loading: false, formStatus: 'An error ocurred'}, "slide create ERROR")
  //     })
  // }
  //
  // delete(id: string): any {
  //   this.store.patch({loading: true, slides: []}, "slide delete");
  //   return this.fireStore.delete(id)
  //     .catch(err => {
  //       this.store.patch({loading: false, formStatus: 'An error ocurred'}, "slide delete ERROR")
  //     })
  // }
  //
  // update(slide: Slide, id: string): any {
  //   this.store.patch({loading: true, slides: []}, "slide update");
  //   return this.fireStore.update(slide, id)
  //     .catch(err => {
  //       this.store.patch({loading: false, formStatus: 'An error ocurred'}, "slide update ERROR")
  //     })
  // }
  //
  // getSlide(id: string): Observable<Slide> {
  //   return this.fireStore.doc$(id)
  // }

}
