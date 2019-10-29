import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataBaseService} from "../../../sport-base/services/data-base.service";

@Component({
  selector: 'app-add-base-form',
  templateUrl: './add-base-form.component.html',
  styleUrls: ['./add-base-form.component.css']
})
export class AddBaseFormComponent implements OnInit {
  formSmall = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    description: new FormControl(''),
    file: new FormControl('')
  });

  constructor(private baseService: DataBaseService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Submit:', this.formSmall.value);
    this.formSmall.reset();
  }
}
