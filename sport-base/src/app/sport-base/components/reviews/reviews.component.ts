import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SportBase} from "../../models/sport-base";
import {ActivatedRoute, Router} from "@angular/router";
import {SportBasesService} from "../../services/sport-bases.service";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input()
  sportBase: SportBase;

  @Output()
  endReview: EventEmitter<boolean> = new EventEmitter<boolean>();

  review: FormGroup;
  comment: Comment;

  constructor(
    private baseService: SportBasesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.review = new FormGroup({
      comment: new FormControl('', Validators.required),
      positive: new FormControl('', Validators.required),
      name: new FormControl(''),
      date: new FormControl(''),
      id: new FormControl('')
    });
  }

  ngOnInit() {
    console.log('review', this.sportBase);
  }

  onDeleteComment() {
    this.endReview.emit(false)
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  onSubmit() {
    this.review.patchValue({
      date: Date.now(),
      name: 'user.active.name',
      id: this.generateId(),
    });

    const newComment = this.review.value;
    if(newComment.positive) {
      this.sportBase.positiveComments.push(newComment);
    } else {
      this.sportBase.negativeComments.push(newComment);
    }
    console.log(this.sportBase);
    this.review.reset();
    this.endReview.emit(false)
  }
}
