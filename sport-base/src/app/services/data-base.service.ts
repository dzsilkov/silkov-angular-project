import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SportBase} from "../models/sport-base";
import {catchError, map, tap} from "rxjs/operators";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {User} from "../models/user";
import {of} from "rxjs/internal/observable/of";
import {Store} from "../sport-base/store";


@Injectable()
export class DataBaseService {
  sportBasesCollection: AngularFirestoreCollection<SportBase>;
  sportBaseDoc: AngularFirestoreDocument<SportBase>;
  sportBases$: Observable<SportBase[]>;
  sportBase$: Observable<SportBase>;

  constructor(
    private db: AngularFirestore,
    private store: Store
  ) {
    this.sportBasesCollection = this.db.collection('sportBases');
  }

  // getSportBases$ = this.db.collection('sportBases').snapshotChanges().pipe(
  //   map(changes => {
  //     return changes.map(action => {
  //       const data = action.payload.doc.data() as SportBase;
  //       data.id = action.payload.doc.id;
  //       return data;
  //     });
  //   }),
  //   tap(next => console.log('next', next)),
  //   tap(next => this.store.set('sportBases', next))
  // );

  getSportBases(): Observable<SportBase[]> {
    this.sportBases$ = this.sportBasesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as SportBase;
          data.id = action.payload.doc.id;
          return data;
        });
      }),
      tap(next => console.log('next', next)),
      tap(next => this.store.set('sportBases', next))
    );
    return this.sportBases$;
  }

  getSportBase(id: string): Observable<SportBase> {
    this.sportBaseDoc = this.db.doc<SportBase>(`sportBases/${id}`);
    this.sportBase$ = this.sportBaseDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as SportBase;
          data.id = action.payload.id;
          return data;
        }
      })
    );

    return this.sportBase$;
  }

  newSportBase(sportBase: SportBase) {
    this.sportBasesCollection.add(sportBase);
  }

  updateSportBase(sportBase: SportBase) {
    this.sportBaseDoc = this.db.doc(`sportBases/${sportBase.id}`);
    this.sportBaseDoc.update(sportBase);
  }

  deleteSportBase(sportBase: SportBase) {
    this.sportBaseDoc = this.db.doc(`sportBases/${sportBase.id}`);
    this.sportBaseDoc.delete();
  }

  searchSportBase(str: string) {
    this.sportBases$ = this.sportBasesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as SportBase;
          data.id = action.payload.doc.id;
          console.log('data', data);
          return data;
        });
      })
    );
    console.log('bases', this.sportBases$);
    return this.sportBases$;
  }



  //   if (!str.trim()) {
  //     return of([]);
  //   }
  //   return this.db.get<SportBase[]>(`${this.basesUrl}/?name=${str}`).pipe(
  //     tap(_ => console.log(`found base matching "${str}"`)),
  //   );

}
