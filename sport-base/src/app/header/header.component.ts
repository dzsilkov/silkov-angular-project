import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchShow: boolean;
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    // private flashMessage: FlashMessagesService,
  ) {
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.showRegister = true;
  }

  searchInputToggle(e): void {
    e.preventDefault();
    this.searchShow = !this.searchShow;
  }

  logoutClick(e) {
    this.authService.signOut();
    e.preventDefault();
    // this.flashMessage.show('You are now logged out', {
    //   cssClass: 'alert-success', timeout: 4000
    // });
    this.router.navigate(['home']);
  }
}
