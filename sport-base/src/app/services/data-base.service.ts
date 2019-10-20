import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SportBase} from "../models/sport-base";
import {tap} from "rxjs/operators";
import {Store} from "../store";


@Injectable()
export class DataBaseService {
  sportBases: AngularFirestoreCollection<SportBase>;
  bases: Observable<SportBase>;

  constructor(
    private db: AngularFirestore,
    private store: Store
  ) {
    this.sportBases = this.db.collection('sportBases');
    this.sportBases.valueChanges().pipe(
      tap(console.log),
      tap(sportBases => {
        this.store.set('sportBases', sportBases);
      })
    )
      .subscribe((bases) => this.bases = bases);
    console.log(this.bases);
  }

}
