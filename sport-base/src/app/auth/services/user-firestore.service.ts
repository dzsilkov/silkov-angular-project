import {Injectable} from '@angular/core';
import {FirestoreService} from "../../core/services/firestore.service";
import {User} from "../models/user";

@Injectable()
export class UserFirestoreService extends FirestoreService<User> {
  protected basePath: string = 'users';
}
