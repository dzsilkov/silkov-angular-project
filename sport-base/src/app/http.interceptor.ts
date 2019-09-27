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
            },
            {
              "id": 2,
              "name": "Детский спортивный центр Росица - Балканика",
              "country": "Болгария",
              "region": "Вся Болгария",
            },
            {
              "id": 3,
              "name": "Центр олимпийского резерва г. Жлобин",
              "country": "Беларусь",
              "region": "Гомельская обл.",
            },
            {
              "id": 4,
              "name": "Дворец водного спорта г. Новополоцк",
              "country": "Беларусь",
              "region": "Витебская обл.",
            },
            {
              "id": 5,
              "name": "Международный детский лагерь «Морские дюны»",
              "country": "Болгария",
              "region": "Вся Болгария",
            },
            {
              "id": 6,
              "name": "Ледовый дворец г. Барановичи",
              "country": "Беларусь",
              "region": "Брестская область",
            },
            {
              "id": 7,
              "name": "Спортивная база г. Ивацевичи",
              "country": "Беларусь",
              "region": "Брестская область",
            },
            {
              "id": 8,
              "name": "Спортивная база г. Минск",
              "country": "Беларусь",
              "region": "Минская обл.",
            }
          ],
          "articles": [
            {
              "id": 1,
              "title": "Спортивные центры в Беларуси",
              "date": "2018.08.28"
            }
          ]
        },
        status: 200
      })
    );
  }
}
