import {Injectable} from '@angular/core';
import {UserFirestoreService} from "./user-firestore.service";
import {UserStoreService} from "./user-store.service";
import {User} from "../models/user";
import {Observable} from "rxjs/internal/Observable";
import {map, pluck, switchMap, tap} from "rxjs/operators";
import {AuthService} from "./auth.service";

@Injectable()
export class UserService {

  constructor(
    private fireStore: UserFirestoreService,
    private store: UserStoreService,
    private afAuth: AuthService,
  ) {
    this.afAuth.getAuth().pipe(
      tap(auth => {
        if (auth) {
          this.store.patch({
            loading: false,
            isLoggedIn: true,
            isLoggedOut: false,
          })
        } else {
          this.store.patch({
            loading: false,
            isLoggedIn: false,
            isLoggedOut: true,
          })
        }
      }),
      pluck('email'),
      switchMap((value) => {
        const query = value;
        return this.fireStore.collection$(ref => {
          return ref.where('email', '==', query);
        }).pipe(
          tap(user => {
            this.store.patch({
              loading: false,
              activeUser: user[0],
              isAdmin: user[0].admin
            }, `user active subscription`)
          }),
        )
      })
    ).subscribe();
  }


  get users$(): Observable<User[]> {
    return this.store.state$.pipe(
      map(state => state.loading ? [] : state.users)
    )
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => state.loading)
    )
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => state.isLoggedIn)
    )
  }

  get isLoggedOut$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => state.isLoggedOut)
    )
  }

  get isAdmin$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => state.isAdmin)
    )
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => {
        return !state.loading && state.users && state.users.length === 0
      })
    )
  }

  get activeUser$(): Observable<User | string> {
    return this.store.state$.pipe(
      map(state => state.activeUser)
    )
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus))
  }

  create(user: User) {
    this.store.patch({
        loading: true,
        users: [],
        formStatus: 'Saving...'
      },
      "user create");
    return this.fireStore.create(user)
      .then(_ => {
        this.store.patch({formStatus: 'Saved!'}, "user create SUCCESS");
        setTimeout(() => this.store.patch({formStatus: ''}, "user create timeout reset formStatus"), 2000)
      }).catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "user create ERROR")
      })
  }

  logOut() {
    this.store.patch({
      loading: true,
      isLoggedIn: false,
      isAdmin: false,
      isLoggedOut: false,
      activeUser: 'guest',
      formStatus: 'Saving...'
    }, "user logOut");
    return this.afAuth.signOut()
      .then(_ => {
        this.store.patch({
          isLoggedOut: true,
          loading: false,
          isAdmin: false,
          isLoggedIn: false,
          formStatus: 'logOut'
        }, "user logOut SUCCESS");
        setTimeout(() => this.store.patch({
          loading: false,
          formStatus: ''
        }, "user create timeout reset formStatus"), 2000)
      }).catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "user logOut ERROR")
      })
  }

  logIn(email, password) {
    this.store.patch({
      loading: true,
      isLoggedIn: true,
      isAdmin: false,
      isLoggedOut: false,
      activeUser: '',
      formStatus: 'Saving...'
    }, "user logOut");
    return this.afAuth.login(email, password)
      .then(_ => {
        this.store.patch({
          isLoggedOut: false,
          isLoggedIn: true,
          loading: false,
          formStatus: 'logIn'
        }, "user logIn SUCCESS");
        setTimeout(() => this.store.patch({formStatus: ''}, "user create timeout reset formStatus"), 2000)
      }).catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "user logIn ERROR")
      })
  }

  signUp(email, password) {
    this.store.patch({
      loading: true,
      isLoggedIn: true,
      isLoggedOut: false,
      isAdmin: false,
      activeUser: 'guest',
      formStatus: 'Saving...'
    }, "user logOut");
    return this.afAuth.signup(email, password)
      .then(_ => {
        this.store.patch({
          isLoggedOut: false,
          loading: false,
          isLoggedIn: true,
          formStatus: 'signUp'
        }, "user signUp SUCCESS");
        setTimeout(() => this.store.patch({formStatus: ''}, "user create timeout reset formStatus"), 2000)
      }).catch(err => {
        this.store.patch({loading: false, formStatus: 'An error ocurred'}, "user signUp ERROR")
      })
  }
}
