import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  form = new FormGroup({
    searchValue: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submit:', this.form.value);
    this.form.reset();
  }
}
