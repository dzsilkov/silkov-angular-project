import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string = 'password';
  signup = new FormGroup({
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

  }

  onSubmit() {
    this.authService.signup(this.signup.value.email, this.signup.value.password)
      .then(res => {
        // this.flashMessage.show('You are now registered and logged in', {
        //   cssClass: 'alert-success', timeout: 4000
        // });
        this.router.navigate(['/']);
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
