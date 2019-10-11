import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-base-mail',
  templateUrl: './add-base-mail.component.html',
  styleUrls: ['./add-base-mail.component.css']
})
export class AddBaseMailComponent implements OnInit {
  @Input()
  parent;
  constructor() { }

  ngOnInit() {
  }

}
