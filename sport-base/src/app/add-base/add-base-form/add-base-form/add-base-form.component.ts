import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-base-form',
  templateUrl: './add-base-form.component.html',
  styleUrls: ['./add-base-form.component.css']
})
export class AddBaseFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Submit:', this.form.value);
    this.form.reset();
  }
}
