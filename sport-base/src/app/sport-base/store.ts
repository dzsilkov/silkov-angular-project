import { Observable, BehaviorSubject } from 'rxjs';
import {pluck, distinctUntilChanged, tap} from 'rxjs/operators';

import { State } from './state';

const state: State = {
  sportBases: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(
      tap((next) => console.log('select', next)),
      pluck(name)
    );
  }

  set(name: string, state: any) {
    console.log('store', this.subject.value);
    this.subject.next({
      ...this.value, [name]: state
    });
    console.log('store2', this.subject.value);
  }

}
