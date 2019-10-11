import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {query} from '@angular/animations';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  form = new FormGroup({
    searchValue: new FormControl(''),
  });
  @Input()
  show: boolean;
  constructor() {
  }

  ngOnInit() {
    this.searchChange();
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
