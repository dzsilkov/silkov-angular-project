import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs/internal/Observable";
import {environment} from "../../../environments/environment";

export abstract class Store<T> {

  protected subject: BehaviorSubject<T>;
  state$: Observable<T>;
  state: T;
  previous: T;

  protected abstract store: string;

  constructor(initialValue: Partial<T>) {
    this.subject = new BehaviorSubject<T>(initialValue as T);
    this.state$ = this.subject.asObservable();
    this.state = initialValue as T;
    this.state$.subscribe(state => {
      this.state = state
    })
  }

  get value(): Observable<T> {
    return this.state$;
  }

  patch(newValue: Partial<T>, event: string = "Not specified") {
    this.previous = this.state;
    const newState = Object.assign({}, this.state, newValue);
    if (!environment.production) {
      console.groupCollapsed(`[${this.store} store] [patch] [event: ${event}]`);
      console.log("change", newValue);
      console.log("prev", this.previous);
      console.log("next", newState);
      console.groupEnd()
    }
    this.subject.next(newState)
  }

  set(newValue: Partial<T>, event: string = "Not specified") {
    this.previous = this.state;
    const newState = Object.assign({}, newValue) as T;
    if (!environment.production) {
      console.groupCollapsed(`[${this.store} store] [set] [event: ${event}]`);
      console.log("change", newValue);
      console.log("prev", this.previous);
      console.log("next", newState);
      console.groupEnd()
    }
    this.subject.next(newState)
  }
}
