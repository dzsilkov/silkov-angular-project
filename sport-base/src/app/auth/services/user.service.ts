import {Injectable} from '@angular/core';
import {UserFirestoreService} from "./user-firestore.service";
import {UserStoreService} from "./user-store.service";
import {User} from "../models/user";
import {Observable} from "rxjs/internal/Observable";
import {map, switchMap, tap} from "rxjs/operators";
import {AuthService} from "../auth.service";

@Injectable()
export class UserService {

  isLoggedIn;
  loggedInUser;
  showRegister;

  constructor(
    private fireStore: UserFirestoreService,
    private store: UserStoreService,
    private afAuth: AuthService,
  ) {
    this.afAuth.getAuth().subscribe(auth => {
      if (auth) {
        console.log('auth', auth);
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    this.showRegister = true;

    this.fireStore.collection$().pipe(
      tap(users => {
        this.store.patch({
          loading: false,
          users,
          isLoggedIn: this.isLoggedIn,
          loggedInUser: this.loggedInUser,
          activeUser: users.find(user => {
            console.log('activeUser', user);
            return user.email === this.loggedInUser
          }),
        }, `users collection subscription`)
      })
    ).subscribe()
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

  get loggedInUser$(): Observable<string> {
    return this.store.state$.pipe(
      map(state => state.loggedInUser)
    )
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => {
        return !state.loading && state.users && state.users.length === 0
      })
    )
  }

  get activeUser$(): Observable<User> {
    return this.store.state$.pipe(
      map(state => state.activeUser)
    )
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus))
  }

  create(user: User) {
    this.store.patch({ loading: true, users: [], formStatus: 'Saving...' }, "employee create");
    return this.fireStore.create(user).then(_ => {
      this.store.patch({ formStatus: 'Saved!' }, "user create SUCCESS");
      setTimeout(() => this.store.patch({ formStatus: '' }, "user create timeout reset formStatus"), 2000)
    }).catch(err => {
      this.store.patch({ loading: false, formStatus: 'An error ocurred' }, "user create ERROR")
    })
  }
}
