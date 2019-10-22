import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  type: string = 'password';
  login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    // private flashMessage: FlashMessagesService
  ) {
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
          if (auth) {
            this.router.navigate(['home']);
          }
        });
  }

  onSubmit() {
    const email = this.login.value.email;
    console.log(email);
    const password = this.login.value.password;
    console.log(password);
    this.authService.login(email, password)
      .then(res => {
        // this.flashMessage.show('You are now logged in', {
        //   cssClass: 'alert-success', timeout: 4000
        // });
        this.router.navigate(['home']);
      })
      .catch(err => {
        // this.flashMessage.show(err.message, {
        //   cssClass: 'alert-danger', timeout: 4000
        // });
      });
  }

  showHidePassword() {
    this.type = this.type === "password" ? "text" : "password";
  }
}
