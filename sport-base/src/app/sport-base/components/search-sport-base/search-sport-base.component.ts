import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {debounceTime, distinctUntilChanged, switchMap, take, tap} from "rxjs/operators";
import {SportBase} from "../../../models/sport-base";
import {FormControl, FormGroup} from "@angular/forms";
import {FacadeSportBaseService} from "../../services/facade-sport-base.service";

@Component({
  selector: 'app-search-sport-base',
  templateUrl: './search-sport-base.component.html',
  styleUrls: ['./search-sport-base.component.css']
})
export class SearchSportBaseComponent implements OnInit {
  form: FormGroup = new FormGroup({
    searchValue: new FormControl(''),
  });
  sportBases$: Observable<SportBase[]> = this.facade.loadSportBases(this.form.valueChanges);
  constructor(private facade: FacadeSportBaseService) {}

  ngOnInit() {
    const initialStr = this.facade.searchSportBase$.pipe(take(1));
    initialStr.subscribe(str => this.form.patchValue(str, {emitEvent: false}))

    // const searchValue = this.form.get('searchValue');
    // this.sportBases$ = searchValue.valueChanges.pipe(
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   tap(console.log),
    //   switchMap((str: string) => this.facade.searchSportBase(str)),
    //   tap(console.log),
    // );
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
