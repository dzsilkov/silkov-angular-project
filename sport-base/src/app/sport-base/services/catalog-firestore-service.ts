import {FirestoreService} from "../../core/services/firestore.service";
import {Injectable} from "@angular/core";
import {Sports} from "../models/sports";

@Injectable()
export class CatlogFirestoreService extends FirestoreService<Sports> {
  protected basePath: string = 'sports';
}
