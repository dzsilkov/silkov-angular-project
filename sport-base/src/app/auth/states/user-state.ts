import {User} from "../models/user";

export interface UserState {
  loading: boolean;
  users: User[];
  activeUser: User | any;
  formStatus: string;
  isLoggedIn: boolean;
  isAdmin: boolean,
  isLoggedOut: boolean,
}
