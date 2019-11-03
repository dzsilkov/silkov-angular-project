import {Component, OnInit} from '@angular/core';
import {Slide} from "../../../models/slide";
import {from} from "rxjs/internal/observable/from";
import {concatMap, delay, repeat, switchMap, takeWhile, tap} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {Observable} from "rxjs/internal/Observable";
import {interval} from "rxjs/internal/observable/interval";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  slides: Slide[] = [
    {
      id: '1',
      title: 'Спортивные Базы',
      img: './../../../assets/slider-1.jpg',
      description: 'Distinctio veniam minus.',
      link: ''
    },
    {
      id: '2',
      title: 'Более 20 видов спорта',
      img: './../../../assets/slider-2.jpg',
      description: 'consectetur adipisicing elit. Distinctio veniam minus.',
      link: ''
    },
    {
      id: '3',
      title: 'Базы для отдыха',
      img: './../../../assets/slider-3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio veniam minus.',
      link: ''
    },
    {
      id: '4',
      title: 'Базы для спорта',
      img: './../../../assets/slider-4.jpg',
      description: '    Lorem ipsum dolor sit amet, con Distinctio veniam minus.',
      link: ''
    },
    {
      id: '5',
      title: 'Организация и проведение спортивных сборов',
      img: './../../../assets/slider-5.jpg',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: ''
    },
    {
      id: '6',
      title: 'Организация и проведение спортивных сборов',
      img: './../../../assets/slider-6.jpg',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: ''
    },
    {
      id: '7',
      title: 'Организация и проведение спортивных сборов',
      img: './../../../assets/slider-7.jpg',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: ''
    },
    {
      id: '8',
      title: 'Организация и проведение спортивных сборов',
      img: './../../../assets/slider-8.jpg',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: ''
    },
    {
      id: '9',
      title: 'Организация и проведение спортивных сборов',
      img: './../../../assets/slider-9.jpg',
      description: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: ''
    },
  ];
  slide: Observable<Slide>;
  constructor() {
  }

  ngOnInit() {
    this.slide =  from(this.slides).pipe(
      concatMap(val => {
        return of(val).pipe(
          delay(4000)
        )
      }),
      repeat()
    )
  }
}
