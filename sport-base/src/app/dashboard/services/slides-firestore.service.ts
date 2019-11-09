import {Injectable} from '@angular/core';
import {FirestoreService} from "../../core/services/firestore.service";
import {Slide} from "../models/slide";

@Injectable()
export class SlidesFirestoreService extends FirestoreService<Slide> {
  protected basePath: string = 'slides';
}
