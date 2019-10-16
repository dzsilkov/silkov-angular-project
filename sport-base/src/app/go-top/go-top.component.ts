import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.css']
})
export class GoTopComponent implements OnInit {
@Input()
acttive: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
