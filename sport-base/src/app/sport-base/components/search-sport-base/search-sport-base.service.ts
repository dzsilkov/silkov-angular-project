import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {SportBase} from "../../models/sport-base";
import {Observable, Subject} from "rxjs/index";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable()
export class SearchSportBaseService {

  sportBasesCollection: AngularFirestoreCollection<SportBase>;
  sportBaseDoc: AngularFirestoreDocument<SportBase>;
  sportBases$: Observable<SportBase[]>;

  searchStr$: BehaviorSubject<string | null>;

  constructor(
    private db: AngularFirestore,
  ) {
    this.sportBasesCollection = this.db.collection<SportBase>('sportBases');
    this.searchStr$ = new BehaviorSubject(null);
  }

  searchSportBase(str) {
    return this.sportBases$ = this.db.collection<SportBase>('sportBases', ref => {
      return ref.where('name', '==', str)
    })
      .snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as SportBase;
          data.id = action.payload.doc.id;
          return data;
        });
      }),
    )


    // getRef
    //   .orderBy('salary_balance')
    //   .startAt('200-300')
    //   .endAt('200-800')
    //   .on('child_added', function(snapshot) {
    //     var employee= snapshot.val();
    //     console.log(employee);
    //   });
    //   return this.sportBases$ = this.sportBasesCollection.snapshotChanges().pipe(
    //     .where('keywords', 'array-contains', str.toLowerCase())
    //     map(changes => {
    //       return changes.map(action => {
    //         const data = action.payload.doc.data() as SportBase;
    //         data.id = action.payload.doc.id;
    //         return data;
    //       });
    //     }),
    //   )
  }
}
