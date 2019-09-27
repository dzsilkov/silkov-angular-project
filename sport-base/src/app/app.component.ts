import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sport-base';
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
      link: '/oops',
      name: '404',
      exact: false
    }
  ];
}
