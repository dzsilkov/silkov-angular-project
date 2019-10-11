import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-base',
  templateUrl: './add-base.component.html',
  styleUrls: ['./add-base.component.css']
})
export class AddBaseComponent implements OnInit {
  @Input()
 show;
  title = 'Добавить спортивную базу';
  constructor() { }

  ngOnInit() {
  }

}
