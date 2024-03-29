import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  signup(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(
      map(auth => auth),
    );
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }



}
