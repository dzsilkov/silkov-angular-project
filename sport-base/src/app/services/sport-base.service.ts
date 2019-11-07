import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {SportBase} from "../sport-base/models/sport-base";
import {catchError, map, tap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";


@Injectable({
  providedIn: "root"
})

export class SportbaseService {
  private basesUrl: string = '/api/bases';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getBases(): Observable<SportBase[]> {
    return this.http
      .get<SportBase[]>(this.basesUrl)
      .pipe(
        tap(_ => console.log('fetched bases')),
        map(sportBases => {
          if (!sportBases) {
            return []
          }
          return sportBases
        }),
        catchError(this.handleError<SportBase[]>('getBases', []))
      );
  }

  getBase(id: number): Observable<SportBase> {
    const url = `${this.basesUrl}/${id}`;
    return this.http
      .get<SportBase>(url).pipe(
        tap(_ => console.log(`fetched base id=${id}`)),
        catchError(this.handleError<SportBase>(`getBase id=${id}`))
      )
  }

  searchBase(term: string): Observable<SportBase[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<SportBase[]>(`${this.basesUrl}/?name=${term}`).pipe(
      tap(_ => console.log(`found base matching "${term}"`)),
      catchError(this.handleError<SportBase[]>('searchBase', []))
    );
  }

  addBase(sportBase: SportBase): Observable<SportBase> {
    return this.http.post<SportBase>(this.basesUrl, sportBase, this.httpOptions).pipe(
      tap((newSportBase: SportBase) => console.log(`added base w/ id=${newSportBase.id}`)),
      catchError(this.handleError<SportBase>('addBase'))
    );
  }

  deleteBase(sportBase: SportBase | number): Observable<SportBase> {
    const id = typeof sportBase === 'number' ? sportBase : sportBase.id;
    const url = `${this.basesUrl}/${id}`;
    return this.http.delete<SportBase>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted base id=${id}`)),
      catchError(this.handleError<SportBase>('deleteBase'))
    );
  }

  updateBase(sportBase: SportBase): Observable<any> {
    return this.http.put(this.basesUrl, sportBase, this.httpOptions).pipe(
      tap(_ => console.log(`updated base id=${sportBase.id}`)),
      catchError(this.handleError<any>('updateBase'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

//   private log(message: string) {
//     this.messageService.add(`HeroService: ${message}`);
//   }
// }

}
