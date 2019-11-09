import {Injectable} from '@angular/core';
import {FirestoreService} from "../../core/services/firestore.service";
import {Article} from "../models/article";

@Injectable()
export class ArticleFirestoreService extends FirestoreService<Article> {
  protected basePath: string = 'articles';
}
