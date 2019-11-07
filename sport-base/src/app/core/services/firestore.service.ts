import {Inject} from "@angular/core";
import {AngularFirestore, QueryFn} from 'angularfire2/firestore';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/internal/Observable";
import {map, tap} from "rxjs/operators";

export abstract class FirestoreService<T> {

  protected abstract basePath: string;

  constructor(
    @Inject(AngularFirestore) protected afDb: AngularFirestore,
  ) {}

  doc$(id: string): Observable<T> {
    return this.afDb.doc<T>(`${this.basePath}/${id}`).snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as T;
          // data.id = action.payload.id;
          return data;
        }
      }),
      tap(r => {
        if (!environment.production) {
          console.groupCollapsed(`FireStore Streaming [${this.basePath}] [doc$] ${id}`);
          console.log(r);
          console.groupEnd()
        }
      }),
    );
  }

  collection$(queryFn?: QueryFn): Observable<T[]> {
    return this.afDb.collection<T>(`${this.basePath}`, queryFn).snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as T;
          // data.id = action.payload.doc.id;
          return data;
        });
      }),
      tap(r => {
        if (!environment.production) {
          console.groupCollapsed(`Firestore Streaming [${this.basePath}] [collection$]`);
          console.table(r);
          console.groupEnd()
        }
      }),
    );
  }

  setDoc(value: T) {
    const id = this.afDb.createId();
    return this.collection.doc(id).set(Object.assign({}, {id}, value))
  }

  create(value: T) {
    return this.collection.add(value);
  }

  update(value: T, id: string) {
    return this.collection.doc(id).update(value);
  }

  delete(id: string) {
    return this.collection.doc(id).delete();
  }

  private get collection() {
    return this.afDb.collection(`${this.basePath}`);
  }
}

