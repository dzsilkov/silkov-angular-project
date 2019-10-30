import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {SportBase} from "../models/sport-base";
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs/internal/Observable";
import {DataBaseService} from "../services/data-base.service";

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  @Input()
  show: boolean;
  form = new FormGroup({
    searchValue: new FormControl(''),
  });

  sportBases$: Observable<SportBase[]>;
  private searchStr = new Subject<string>();
  constructor(private baseService: DataBaseService) {
  }
  search(str: string): void {
    this.searchStr.next(str);
  }
  ngOnInit() {
    const searchValue = this.form.get('searchValue');
    this.sportBases$ = searchValue.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(console.log),
      switchMap((str: string) => this.baseService.searchSportBase(str)),
      tap(console.log),
    );
  }
  searchChange() {
    // const searchValue = this.form.get('searchValue');
    //
    // searchValue.valueChanges.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   tap(console.log),
    //   switchMap(query => fetchData(query))
    // ).subscribe(value => console.log(value));
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
    this.form.reset();
  }


}
