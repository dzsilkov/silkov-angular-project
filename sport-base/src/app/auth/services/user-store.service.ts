import {Injectable} from '@angular/core';
import {Store} from "../../core/services/store";
import {UserState} from "../states/user-state";
import {AuthService} from "../auth.service";

@Injectable()
export class UserStoreService extends Store<UserState> {
  protected store: string = 'user';

  constructor(
    private afAuth: AuthService,
  ) {
    super({
      loading: true,
      loggedInUser: '',
      activeUser: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        admin: false,
        password: ''
      },
      isLoggedIn: false,
      admin: false,
    })

  }
}
