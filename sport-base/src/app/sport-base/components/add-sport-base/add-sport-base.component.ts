import { Component, OnInit } from '@angular/core';
import {DataBaseService} from "../../../services/data-base.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-sport-base',
  templateUrl: './add-sport-base.component.html',
  styleUrls: ['./add-sport-base.component.css']
})
export class AddSportBaseComponent implements OnInit {
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
