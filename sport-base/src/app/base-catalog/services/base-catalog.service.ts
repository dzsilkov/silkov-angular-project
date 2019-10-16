import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SportBase } from '../../models/sport-base';


@Injectable()
export class BaseCatalogService {
  private basesApi: string = '/api/bases';

  constructor(private http: HttpClient) {
  }

  getBases(): Observable<SportBase[]> {

    return this.http
      .get<SportBase[]>(this.basesApi);
  }

  getBase(id: number): Observable<SportBase> {

    return this.http
      .get<SportBase>(`${this.basesApi}/${id}`);
  }
}
