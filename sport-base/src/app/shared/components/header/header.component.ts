import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../auth/auth.service";
import {Observable} from "rxjs/internal/Observable";
import {User} from "../../../auth/models/user";
import {UserService} from "../../../auth/services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // searchShow: boolean;
  loading$: Observable<boolean>;
  noResults$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;
  loggedInUser$: Observable<string>;
  activeUser$: Observable<User>;
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private userService: UserService,
    private router: Router,
    // private flashMessage: FlashMessagesService,
  ) {
  }

  ngOnInit() {
    this.loading$ = this.userService.loading$;
    this.noResults$ = this.userService.noResults$;
    this.activeUser$ = this.userService.activeUser$;
    this.isLoggedIn$ = this.userService.isLoggedIn$;
    this.loggedInUser$ = this.userService.loggedInUser$;
  }

  searchInputToggle(e): void {
    // e.preventDefault();
    // this.searchShow = !this.searchShow;
  }

  logoutClick(e) {
    // this.authService.signOut();
    e.preventDefault();
    // this.flashMessage.show('You are now logged out', {
    //   cssClass: 'alert-success', timeout: 4000
    // });
    this.router.navigate(['/']);
  }
}
