import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SportBase } from './../models/sport-base';

const SPORTBASE_API: string = '/api/bases';

@Injectable()
export class BaseCatalogService {

  constructor(private http: HttpClient) { }

  getBases(): Observable<SportBase[]> {
    return this.http
      .get(SPORTBASE_API)
      .pipe(
        map((response: any) => response.bases)
      )
  }

}
