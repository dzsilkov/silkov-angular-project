import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SportBase} from "../models/sport-base";
import {map} from "rxjs/operators";
import {Store} from "../store";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';



@Injectable()
export class DataBaseService {
  sportBasesCollection: AngularFirestoreCollection<SportBase>;
  sportBaseDoc: AngularFirestoreDocument<SportBase>;
  sportBases: Observable<SportBase[]>;

  constructor(
    private db: AngularFirestore,
    private store: Store
  ) {
    this.sportBasesCollection = this.db.collection('sportBases');
  }
  getSportBases(): Observable<SportBase[]> {
    this.sportBases = this.sportBasesCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as SportBase;
          console.log('data', data)
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );

    return this.sportBases;
  }
}
