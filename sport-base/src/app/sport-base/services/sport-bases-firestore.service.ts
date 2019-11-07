import {Injectable} from '@angular/core';
import {FirestoreService} from "../../core/services/firestore.service";
import {SportBase} from "../models/sport-base";

@Injectable()
export class SportBasesFirestoreService extends FirestoreService<SportBase> {
  protected basePath: string = 'sportBases';
}
