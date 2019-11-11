import {Injectable} from '@angular/core';
import {SportBasesFirestoreService} from "./sport-bases-firestore.service";
import {switchMap, tap} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {SportBase} from "../models/sport-base";
import {ActivatedRoute, Router} from "@angular/router";
import {AppStore} from "../../core/services/app-store";
import {FlashMessagesService} from "angular2-flash-messages";
import {combineLatest} from "rxjs/internal/observable/combineLatest";
import {Sports} from "../models/sports";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {CatlogFirestoreService} from "./catalog-firestore-service";

@Injectable()
export class SportBasesService {

  sportFilter$: BehaviorSubject<string | null>;
  countryFilter$: BehaviorSubject<string | null>;
  regionFilter$: BehaviorSubject<string | null>;

  sportBases;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private fireStore: SportBasesFirestoreService,
    private fireSports: CatlogFirestoreService,
    private store: AppStore
  ) {
    // this.fireStore.collection$().pipe(
    //   tap(() => this.store.set('loading', true)),
    //   tap(sportBases => this.store.set('sportBases', sportBases)),
    //   tap(() => this.store.set('loading', false)),
    // ).subscribe();

    this.fireSports.collection$().pipe(
      tap(() => this.store.set('loading', true)),
      tap(sports => this.store.set('sports', sports)),
      tap(() => this.store.set('loading', false)),
    ).subscribe();

    this.countryFilter$ = new BehaviorSubject(null);
    this.regionFilter$ = new BehaviorSubject(null);
    this.sportFilter$ = new BehaviorSubject(null);

    this.sportBases = combineLatest(
      this.countryFilter$,
      this.regionFilter$,
      this.sportFilter$
    ).pipe(
      switchMap(([country, region, sport]) =>
        this.fireStore.collection$(ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (country) {
            query = query.where('country', '==', country)
          }
          if (region) {
            query = query.where('region', '==', region)
          }
          if (sport) {
            query = query.where('sports', 'array-contains', sport)
          }
          return query;
        }).pipe(
          tap(() => this.store.set('loading', true)),
          tap(sportBases => this.store.set('sportBases', sportBases)),
          tap(() => this.store.set('loading', false)),
        )
      )
    ).subscribe();
  }


  get sports$(): Observable<Sports[]> {
    return this.store.select('sports');
  }

  get positiveComments$(): Observable<number> {
    return this.store.select('positiveComments');
  }

  get totalComments$(): Observable<number> {
    return this.store.select('totalComments');
  }

  get negativeComments$(): Observable<number> {
    return this.store.select('negativeComments');
  }

  get sportBase$(): Observable<SportBase> {
    return this.store.select('sportBase');
  }

  get sportBases$(): Observable<SportBase[]> {
    return this.store.select('sportBases');
  }

  get totalSportBases$(): Observable<number> {
    return this.store.select('totalSportBases')
  }

  get loading$(): Observable<boolean> {
    return this.store.select('loading');
  }

  get noResults$(): Observable<boolean> {
    return this.store.select('noResults');
  }

  get formStatus$(): Observable<string> {
    return this.store.select('formStatus');
  }

  newSportBase(sportBase: SportBase) {
    this.store.set('loading', true);
    this.store.set('formStatus', 'Saving...');
    return this.fireStore.create(sportBase)
      .then(_ => {
        this.store.set('formStatus', 'Saved!');
        this.store.set('loading', false);
        this.router.navigate(['/catalog']);
        this.flashMessage.show('create SUCCESS', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.store.set('formStatus', 'Saved!');
      }).catch(err => {
        this.store.set('loading', false);
        this.store.set('formStatus', 'An error ocurred');
        this.flashMessage.show('Sport-Base does not saved', {
          cssClass: 'alert-success', timeout: 4000
        });
      });
  }

  delete(id: string): any {
    this.store.set('loading', true);
    return this.fireStore.delete(id)
      .then(_ => {
        this.store.set('loading', false);
      })
      .catch(err => {
        this.store.set('loading', false);
      })
  }

  updateSportBase(sportBase: SportBase, id: string): any {
    this.store.set('loading', true);
    this.store.set('formStatus', 'Updating...');
    return this.fireStore.update(sportBase, id)
      .then(_ => {
        this.store.set('formStatus', 'Updated!');
        this.store.set('loading', false);
        this.router.navigate(['/catalog']);
        this.flashMessage.show('update SUCCESS', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.store.set('formStatus', 'Saved!');
      })
      .catch(err => {
        this.store.set('loading', false);
        this.store.set('formStatus', 'An error ocurred');
        this.flashMessage.show('Sport-Base does not upsate', {
          cssClass: 'alert-success', timeout: 4000
        });
      });
  }

  getSportBase(id: string): Observable<SportBase> {
    this.store.set('loading', true);
    this.store.set('formStatus', 'Saving...');
    return this.fireStore.doc$(id).pipe(
      tap(() => this.store.set('loading', false)),
      tap(sportBase => this.store.set('sportBase', sportBase))
    )
  }

}
