import {Injectable} from '@angular/core';
import {Store} from "../../core/services/store";
import {UserState} from "../states/user-state";

@Injectable()
export class UserStoreService extends Store<UserState> {
  protected store: string = 'user';

  constructor() {
    super({
      loading: true,
      activeUser: 'guest',
      isAdmin: false,
      isLoggedIn: false,
      isLoggedOut: false,
    })

  }
}
