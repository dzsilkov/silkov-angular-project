import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {DataBaseService} from "./sport-base/services/data-base.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title;
  ngOnInit() {

  }
}
