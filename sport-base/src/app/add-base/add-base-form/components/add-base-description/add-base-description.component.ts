import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-base-description',
  templateUrl: './add-base-description.component.html',
  styleUrls: ['./add-base-description.component.css']
})
export class AddBaseDescriptionComponent implements OnInit {
  @Input()
  parent;
  constructor() { }

  ngOnInit() {
  }

}
