import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";
import {UsersService} from "../../services/users.service";


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
    private userService: UsersService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // this.loading$ = this.userService.loading$;
    // this.noResults$ = this.userService.noResults$;
    // this.userService.isLoggedIn$.pipe(
    //  // tap(isLoggedIn => {
    //  //   if(isLoggedIn) {
    //  //     this.router.navigate(['sport-bases'])
    //  //   }
    //  // }
    //  // )
    // )
  }

  onSubmit() {
    const email = this.login.value.email;
    const password = this.login.value.password;
    this.userService.logIn(email, password)
  }

  showHidePassword() {
    this.type = this.type === "password" ? "text" : "password";
  }
}
