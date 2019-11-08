import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  nav: Nav[] = [
    {
      link: '',
      name: 'Главная',
      exact: true
    },
    {
      link: 'sport-bases',
      name: 'Каталог',
      exact: true
    },
    {
      link: 'articles',
      name: 'Статьи',
      exact: true
    },
    {
      link: 'contacts',
      name: 'Контакты',
      exact: true
    }
  ];

}
