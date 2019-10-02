import { Component, OnInit } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Главная',
      exact: true
    },
    {
      link: '/catalog',
      name: 'Каталог',
      exact: true
    },
    {
      link: '/articles',
      name: 'Статьи',
      exact: true
    },
    {
      link: '/contacts',
      name: 'Контакты',
      exact: true
    },
    {
      link: '/add-base',
      name: 'Добавить базу',
      exact: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
