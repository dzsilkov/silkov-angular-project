import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {SportBase} from "../models/sport-base";
import {map, tap} from "rxjs/operators";
import {Store} from "../store";


@Injectable({
  providedIn: "root"
})

export class SportBaseService {
  private basesApi: string = '/api/bases';
  constructor(private http: HttpClient,
              private store: Store) {
  }

  getBases(): Observable<SportBase[]> {
    return this.http
      .get<SportBase[]>(this.basesApi)
      .pipe(
        map(sportBases => {
          if (!sportBases) {
            return []
          }
          return sportBases
        }),
        tap(sportBases => {
          this.store.set('sportBases', sportBases);
        })
      );
  }

  getBase(id: number): Observable<SportBase> {
    return this.http
      .get<SportBase>(`${this.basesApi}/${id}`);
  }

}
