import {Observable, BehaviorSubject} from 'rxjs';
import {pluck, distinctUntilChanged} from 'rxjs/operators';
import {AppState} from "./app-state";

const state: AppState = {
  loading: false,

  slides: [],
  totalSlides: 0,
  activeSlide: undefined,

  users: [],
  activeUser: undefined,
  isLoggedIn: false,
  isAdmin: false,
  isLoggedOut: true,

  formStatus: undefined,

  sportBases: [],
  formEditing: false,
  sportBase: undefined,
  totalSportBases: 0,
  totalComments: 0,
  positiveComments: 0,
  negativeComments: 0,
  sports: [],
  images: [],

  articles: [],
  totalArticles: 0,
};

  export class AppStore {
    private subject = new BehaviorSubject<AppState>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
      return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
      return this.store.pipe(pluck(name));
    }

    set(name: string, state: any) {
      console.log('before', this.subject.value);
      this.subject.next({
        ...this.value, [name]: state
      });
      console.log('after', this.subject.value);
    }
  }
