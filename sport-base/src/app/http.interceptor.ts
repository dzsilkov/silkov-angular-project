import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('HTTP Request for ' + req.urlWithParams + ' is being responded to locally.');
    return observableOf(
      new HttpResponse({
        body: {
          "bases": [
            {
              "id": 1,
              "name": "Спортивная база Александрия",
              "country": "Беларусь",
              "region": "Могилёвская обл.",
              "logo": "./../../assets/image/catalog/alexandrija/alexandrija-2-logo.jpg",
            },
            {
              "id": 2,
              "name": "Детский спортивный центр Росица - Балканика",
              "country": "Болгария",
              "region": "Вся Болгария",
              "logo": "./../../assets/image/catalog/bulgary-rosica-balkanika/1.jpg",
            },
            {
              "id": 3,
              "name": "Центр олимпийского резерва г. Жлобин",
              "country": "Беларусь",
              "region": "Гомельская обл.",
              "logo": "./../../assets/image/catalog/globin/globin-1-logo.jpg",
            },
            {
              "id": 4,
              "name": "Дворец водного спорта г. Новополоцк",
              "country": "Беларусь",
              "region": "Витебская обл.",
              "logo": "./../../assets/image/catalog/novopolotsk/novopolotsk-1-logo.jpg",
            },
            {
              "id": 5,
              "name": "Международный детский лагерь «Морские дюны»",
              "country": "Болгария",
              "region": "Вся Болгария",
              "logo": "./../../assets/image/catalog/bulgary-duni/9.jpg",
            },
            {
              "id": 6,
              "name": "Ледовый дворец г. Барановичи",
              "country": "Беларусь",
              "region": "Брестская область",
              "logo": "./../../assets/image/catalog/baranovichi/baranovichi-1-logo.jpg",

            },
            {
              "id": 7,
              "name": "Спортивная база г. Ивацевичи",
              "country": "Беларусь",
              "region": "Брестская область",
              "logo": "./../../assets/image/catalog/ivacevichi/ivacevichi-11-logo.jpg",

            },
            {
              "id": 8,
              "name": "Спортивная база г. Минск",
              "country": "Беларусь",
              "region": "Минская обл.",
              "logo": "./../../assets/image/catalog/minsk/minsk-1-logo.jpg",

            }
          ],
          "articles": [
            {
              "id": 1,
              "title": "Спортивные центры в Беларуси",
              "date": "2018.08.28"
            },
            {
              "id": 2,
              "title": "Что такое спортивные базы и зачем они нужны?",
              "date": "2018.08.28"
            },
            {
              "id": 3,
              "title": "Спортивная гимнастика: сборы",
              "date": "2018.07.22"
            },
            {
              "id": 4,
              "title": "Спортивные сборы по легкой атлетике",
              "date": "2018.07.19"
            },
            {
              "id": 5,
              "title": "Центр Олимпийского Резерва",
              "date": "2018.06.18",
              "logo": "./../../assets/image/catalog/globin/globin-1-logo.jpg",
              "description": "Центр обладает богатейшими традициями подготовки спортсменов самого высокого уровня, от новичка до победителя и призера Олимпийских игр. Но не только спортом высших достижений известен Центр олимпийского резерва г. Жлобин. Современные комплексы крытых и открытых бассейнов, высокая квалификация сотрудников, обслуживающих посетителей, дают возможность получить практически любую высококачественную физкультурно - оздоровительную услугу москвичам и гостям Белоруссии. Жители города знают и любят спорткомплекс - место, где можно набраться сил и здоровья, занимаясь физической культурой и спортом. Здесь научат плавать Вас и ваших детей.",
            },
            {
              "id": 6,
              "title": "Спортивный лагерь в Белоруссии",
              "date": "2018.06.18"
            }
          ]
        },
        status: 200
      })
    );
  }
}
