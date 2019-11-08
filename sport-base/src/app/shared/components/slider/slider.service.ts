import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Slide} from "../../models/slide";
import {SportBase} from "../../../sport-base/models/sport-base";
import {map, tap} from "rxjs/operators";

@Injectable()
export class SliderService {
  slidesCollection: AngularFirestoreCollection<Slide>;
  slides$: Observable<Slide[]>;
  constructor(
    private db: AngularFirestore,
  ) {
    this.slidesCollection = this.db.collection<SportBase>('slides');
  }

  getSlides(): Observable<Slide[]> {
      return this.slides$ = this.slidesCollection.snapshotChanges().pipe(
        map(changes => {
          return changes.map(action => {
            const data = action.payload.doc.data() as SportBase;
            data.id = action.payload.doc.id;
            return data;
          });
        }),
        tap(next => console.log('next', next)),
        // tap(next => this.store.set('slides', next))
      );
    }
}
