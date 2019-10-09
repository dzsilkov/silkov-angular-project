import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
    store: this.formBuilder.group({
      projectStatus: ['']
    }),
  });
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

}
