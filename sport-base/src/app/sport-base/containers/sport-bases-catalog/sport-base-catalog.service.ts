import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {SportBase} from "../../../models/sport-base";
import {Store} from "../../store";
import {map, switchMap, tap} from "rxjs/operators";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {combineLatest} from "rxjs/internal/observable/combineLatest";

@Injectable()
export class SportBaseCatalogService {

  sportFilter$: BehaviorSubject<string | null>;
  countryFilter$: BehaviorSubject<string | null>;
  regionFilter$: BehaviorSubject<string | null>;

  sportBasesCollection: AngularFirestoreCollection<SportBase>;
  sportBases$: Observable<SportBase[]>;

  constructor(
    private db: AngularFirestore,
    private store: Store
  ) {
    this.sportBasesCollection = this.db.collection<SportBase>('sportBases');

    this.countryFilter$ = new BehaviorSubject(null);
    this.regionFilter$ = new BehaviorSubject(null);
    this.sportFilter$ = new BehaviorSubject(null);

    // this.sportBases$ = combineLatest(
    //   this.countryFilter$,
    //   this.regionFilter$,
    //   this.sportFilter$
    // ).pipe(
    //   switchMap(([country, region, sport]) =>
    //     db.collection<SportBase>('sportBases', ref => {
    //       let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
    //       if (country) {
    //         query = query.where('country', '==', country)
    //       }
    //       if (region) {
    //         query = query.where('region', '==', region)
    //       }
    //       if (sport) {
    //         query = query.where('region', '==', sport)
    //       }
    //       return query;
    //     }).valueChanges()
    //   )
    // )
  }

  // getSportBases(): Observable<SportBase[]> {
  //   return this.sportBases$ = this.sportBasesCollection.snapshotChanges().pipe(
  //     map(changes => {
  //       return changes.map(action => {
  //         const data = action.payload.doc.data() as SportBase;
  //         data.id = action.payload.doc.id;
  //         return data;
  //       });
  //     }),
  //     tap(next => console.log('next', next)),
  //     tap(next => this.store.set('sportBases', next))
  //   );
  // }

  getSportBases(): Observable<SportBase[]> {
    return this.sportBases$ = combineLatest(
      this.countryFilter$,
      this.regionFilter$,
      this.sportFilter$
    ).pipe(
      switchMap(([country, region, sport]) =>
        this.db.collection<SportBase>('sportBases', ref => {
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
        }).snapshotChanges().pipe(
          map(changes => {
            return changes.map(action => {
              const data = action.payload.doc.data() as SportBase;
              data.id = action.payload.doc.id;
              return data;
            });
          }),
          tap(next => console.log('next', next)),
          tap(next => this.store.set('sportBases', next))
        )
      )
    )
  }
}
