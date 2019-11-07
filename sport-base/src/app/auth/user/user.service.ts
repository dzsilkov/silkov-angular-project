import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import {User} from "../../models/user";
import {Observable} from "rxjs/internal/Observable";
import {map, switchMap, tap} from "rxjs/operators";
import {AuthService} from "../auth.service";
import {Subject} from "rxjs/internal/Subject";


@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  searchUs = new Subject();

  constructor(
    private db: AngularFirestore,
    private authService: AuthService) {
    this.usersCollection = this.db.collection('users');
  }

searchUser(str) {
  // this.searchUs.next(str);
  // return this.searchUs.pipe(
  //   switchMap(user =>
  //     this.db.collection<User[]>('users', ref => {
  //       ref.where('email', '==', user)
  //     }).snapshotChanges()
  //     )
  //   )
}

  getUsers(): Observable<User[]> {
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as User;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.users;
  }

  newUser(user: User) {
    this.usersCollection.add(user);
  }

  getUser(id: string): Observable<User> {
    this.userDoc = this.db.doc<User>(`users/${id}`);
    return this.user = this.userDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as User;
          data.id = action.payload.id;
          return data;
        }
      }),
    tap(console.log)
    );
  }

  updateUser(user: User) {
    this.userDoc = this.db.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }

  deleteUser(user: User) {
    this.userDoc = this.db.doc(`users/${user.id}`);
    this.userDoc.delete();
  }
}
