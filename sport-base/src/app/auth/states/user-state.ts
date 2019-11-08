import {User} from "../models/user";

export interface UserState {
  loading: boolean;
  users: User[];
  activeUser: User;
  formStatus: string;
  isLoggedIn: boolean;
  admin: boolean;
  loggedInUser: string,
}
