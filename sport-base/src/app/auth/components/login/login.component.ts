import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loading$: Observable<boolean>;
  noResults$: Observable<boolean>;
  isLoggedIn$: Observable<boolean>;

  type: string = 'password';
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {
  }

  ngOnInit() {
    this.loading$ = this.userService.loading$;
    this.noResults$ = this.userService.noResults$;
    this.userService.isLoggedIn$.pipe(
     // tap(isLoggedIn => {
     //   if(isLoggedIn) {
     //     this.router.navigate(['sport-bases'])
     //   }
     // }
     // )
    )
  }

  onSubmit() {
    const email = this.login.value.email;
    const password = this.login.value.password;
    this.userService.logIn(email, password)
      .then(res => {
        this.router.navigate(['sport-bases']);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success', timeout: 4000
        });
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger', timeout: 4000
        });
      });
  }

  showHidePassword() {
    this.type = this.type === "password" ? "text" : "password";
  }
}
