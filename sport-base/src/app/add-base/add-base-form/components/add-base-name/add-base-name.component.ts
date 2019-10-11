import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-base-name',
  templateUrl: './add-base-name.component.html',
  styleUrls: ['./add-base-name.component.css']
})
export class AddBaseNameComponent implements OnInit {
  @Input()
  parent;
  constructor() { }

  ngOnInit() {
  }

}
