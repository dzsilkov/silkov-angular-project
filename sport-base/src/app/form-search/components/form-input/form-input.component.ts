import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input()
  parent;

  constructor() {
  }

  ngOnInit() {

  }

}
