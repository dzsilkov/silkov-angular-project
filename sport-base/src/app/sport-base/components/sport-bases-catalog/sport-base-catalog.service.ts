import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {SportBase} from "../../models/sport-base";
import {switchMap, tap} from "rxjs/operators";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {combineLatest} from "rxjs/internal/observable/combineLatest";
import {SportBasesFirestoreService} from "../../services/sport-bases-firestore.service";
import {SportBasesAppStore} from "../../services/sport-bases-app-store";

@Injectable()
export class SportBaseCatalogService {

  sportFilter$: BehaviorSubject<string | null>;
  countryFilter$: BehaviorSubject<string | null>;
  regionFilter$: BehaviorSubject<string | null>;

  sportBases$;

  constructor(
    private basesService: SportBasesFirestoreService,
    private store: SportBasesAppStore
  ) {

    this.countryFilter$ = new BehaviorSubject(null);
    this.regionFilter$ = new BehaviorSubject(null);
    this.sportFilter$ = new BehaviorSubject(null);

    this.sportBases$ = combineLatest(
      this.countryFilter$,
      this.regionFilter$,
      this.sportFilter$
    ).pipe(
      switchMap(([country, region, sport]) =>
        this.basesService.collection$(ref => {
          let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
          if (country) {
            query = query.where('country', '==', country)
          }
          if (region) {
            query = query.where('region', '==', region)
          }
          if (sport) {
            query = query.where('region', '==', sport)
          }
          return query;
        }).pipe(
          tap(sportBases => {
            this.store.patch({
              loading: false,
              sportBases,
              totalSportBases: sportBases.length,
              formStatus: '',
            }, `sport-bases filtered subscription`)
          }),
        )
      )
    ).subscribe();
  }
}
