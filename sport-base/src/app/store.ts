import {Observable, BehaviorSubject} from 'rxjs';
import {pluck, distinctUntilChanged, tap, filter, find, map, switchMap} from 'rxjs/operators';

import {from} from "rxjs/internal/observable/from";
import {State} from "./models/state";
import {of} from "rxjs/internal/observable/of";

const initialState: State = {
 sportBases: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  getValue(id) {
    const logs = this.select('sportBases');
    return from(logs).pipe(
      tap(console.log),
      find(value1 => value1.id === id),
      tap(console.log),
    )
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  // selectNameValue(name: string, id: number): Observable<any> {
  //   return this.store.pipe(
  //     pluck(name),
  //     tap(console.log),
  //     switchMap(value => of(...value)),
  //     tap(console.log)
  //   )
  // }


  set(name: string, state: any) {
    this.subject.next({
      ...this.value, [name]: state
    });
    console.log(this.value)
  }
}
