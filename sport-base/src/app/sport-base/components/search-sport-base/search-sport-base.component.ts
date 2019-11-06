import {Component, Input, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap, take, tap} from "rxjs/operators";
import {SportBase} from "../../../models/sport-base";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs/internal/Observable";
import {SearchSportBaseService} from "./search-sport-base.service";

@Component({
  selector: 'app-search-sport-base',
  templateUrl: './search-sport-base.component.html',
  styleUrls: ['./search-sport-base.component.css']
})
export class SearchSportBaseComponent implements OnInit {

  sportBases$: Observable<SportBase[]>;

  form: FormGroup = new FormGroup({
    searchValue: new FormControl(''),
  });
  constructor(private searchService: SearchSportBaseService) {

  }

  ngOnInit() {
    const searchValue = this.form.get('searchValue');
    this.sportBases$ = searchValue.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(console.log),
      switchMap(query => this.searchService.searchSportBase(query)),
      tap(console.log)
    )
    // ).subscribe(value => this.sportBases = value);
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
    this.form.reset();
  }
}
