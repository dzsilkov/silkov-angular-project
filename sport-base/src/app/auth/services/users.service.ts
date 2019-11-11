import {Injectable} from '@angular/core';
import {map, switchMap, tap} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../models/user";
import {UserFirestoreService} from "./user-firestore.service";
import {AuthService} from "./auth.service";
import {AppStore} from "../../core/services/app-store";
import {Slide} from "../../dashboard/models/slide";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Injectable()
export class UsersService {

  constructor(
    private router: Router,
    private fireStore: UserFirestoreService,
    private store: AppStore,
    private afAuth: AuthService,
    private flashMessage: FlashMessagesService

  ) {
    this.fetchRoleUser().pipe(
    ).subscribe();
  }

  get users$(): Observable<Slide[]> {
    return this.store.select('users')
  }

  get loading$(): Observable<boolean> {
    return this.store.select('loading')
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.store.select('isLoggedIn')
  }

  get isLoggedOut$(): Observable<boolean> {
    return this.store.select('isLoggedOut')
  }

  get isAdmin$(): Observable<boolean> {
    return this.store.select('isAdmin')
  }

  get noResults$(): Observable<boolean> {
    return this.store.select('noResults')
  }

  get activeUser$(): Observable<User> {
    return this.store.select('activeUser')
  }

  get formStatus$(): Observable<string> {
    return this.store.select('formStatus')
  }

  logOut() {
    this.store.set('loading', true);
    this.afAuth.signOut()
      .then(res => {
        this.store.set('isLoggedIn', false);
        this.store.set('isLoggedOut', true);
        this.store.set('isAdmin', false);
        this.store.set('activeUser', undefined);
        this.store.set('loading', false);
        this.flashMessage.show('You are now logged out', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['auth/login']);
      })
      .catch(err => {
        this.store.set('loading', false);
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }

  logIn(email, password) {
    this.store.set('loading', true);
    return this.afAuth.login(email, password)
      .then(res => {
        this.fetchRoleUser();
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['sport-bases']);
      })
      .catch(err => {
        this.store.set('isLoggedIn', false);
        this.store.set('isLoggedOut', true);
        this.store.set('loading', false);
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }

  signUp(user) {
    this.store.set('loading', true);
    return this.afAuth.signup(user.email, user.password)
      .then(res => {
        this.create(user);
        this.store.set('loading',false);
        this.router.navigate(['sport-bases']);
        this.flashMessage.show('You are now registered in', {
          cssClass: 'alert-success', timeout: 4000
        });
      })
      .catch(err => {
        this.store.set('isLoggedIn', false);
        this.store.set('isLoggedOut', true);
        this.store.set('loading', false);
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }

  create(user: User) {
    this.store.set('formStatus', 'Saving...');
    return this.fireStore.create(user)
      .then(_ => {
        this.store.set('formStatus', 'Saved!');
      }).catch(err => {
        this.store.set('loading', false);
        this.store.set('formStatus', 'An error ocurred');
      })
  }

  fetchAuth() {
    return this.afAuth.getAuth().pipe(
      map(auth => {
        if (auth) {
          this.store.set('isLoggedIn', true);
          this.store.set('isLoggedOut', false);
          return auth;
        } else {
          this.store.set('isLoggedOut', true);
          this.store.set('isLoggedIn', false);
          return false;
        }
      }),
    );
  }

  fetchRoleUser() {
    return this.fetchAuth().pipe(
      switchMap(value => {
        return this.fetchLoggedIn(value)
      }),
      tap(user => this.store.set('activeUser', user[0])),
      tap(user => this.store.set('isAdmin', user[0].admin)),
      tap(() => this.store.set('loading', false)),
    )
  }

  fetchLoggedIn(value) {
    if (value) {
      const email = value.email;
      this.store.set('loading', true);
      return this.fireStore.collection$(ref => {
        return ref.where('email', '==', email);
      })
    } else {
      return []
    }
  }

}
