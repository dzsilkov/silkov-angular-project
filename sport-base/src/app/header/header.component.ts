import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
searchShow: boolean;
addBaseShow: boolean;

  constructor() { }

  ngOnInit() {
  }
  searchInputToggle($event: Event): void {
    if (this.addBaseShow) {
      this.searchShow = !this.searchShow;
      this.addBaseShow = !this.addBaseShow;
    } else {
      this.searchShow = !this.searchShow;
    }
  }

  addBaseToggle($event: Event): void {
    if (this.searchShow) {
      this.addBaseShow = !this.addBaseShow;
      this.searchShow = !this.searchShow;
    } else {
      this.addBaseShow = !this.addBaseShow;
    }
  }

  signUpUser() {
  }

  logInUser() {
  }
}
