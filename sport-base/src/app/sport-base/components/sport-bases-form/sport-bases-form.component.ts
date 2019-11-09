import { Component, OnInit } from '@angular/core';
import {SportBasesService} from "../../services/sport-bases.service";

@Component({
  selector: 'app-sport-bases-form',
  templateUrl: './sport-bases-form.component.html',
  styleUrls: ['./sport-bases-form.component.css']
})
export class SportBasesFormComponent implements OnInit {
  isLoggedIn;
  constructor(
    private baseService: SportBasesService,
  ) { }

  ngOnInit() {
  }
  onSubmit() {

  }
}
