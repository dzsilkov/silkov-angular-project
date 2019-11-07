import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SportBase} from "../sport-base/models/sport-base";
import {catchError, map, tap} from "rxjs/operators";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {User} from "../models/user";
import {of} from "rxjs/internal/observable/of";


@Injectable()
export class DataBaseService {
  sportBasesCollection: AngularFirestoreCollection<SportBase>;
  sportBaseDoc: AngularFirestoreDocument<SportBase>;
  sportBase$: Observable<SportBase>;

  constructor(
    private db: AngularFirestore,
  ) {
    this.sportBasesCollection = this.db.collection<SportBase>('sportBases');
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

  updateSportBase(sportBase: SportBase, id: string) {
    console.log('update', sportBase.id);
    this.sportBaseDoc = this.db.doc(`sportBases/${id}`);
    this.sportBaseDoc.update(sportBase);
  }

  deleteSportBase(sportBase: SportBase) {
    this.sportBaseDoc = this.db.doc(`sportBases/${sportBase.id}`);
    this.sportBaseDoc.delete();
  }

}
