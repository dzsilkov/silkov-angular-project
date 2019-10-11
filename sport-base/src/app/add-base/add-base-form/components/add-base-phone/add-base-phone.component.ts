import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-base-phone',
  templateUrl: './add-base-phone.component.html',
  styleUrls: ['./add-base-phone.component.css']
})
export class AddBasePhoneComponent implements OnInit {
  @Input()
  parent;
  constructor() { }

  ngOnInit() {
  }

}
