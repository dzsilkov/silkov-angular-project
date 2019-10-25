// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
//
// import endpoints from './endpoints';
// import { checkUrl, idFromUrl } from './helpers';
// import {getSportBases, getBaseById, getArticle, getArticles} from './routes';
//
//
// @Injectable()
// export class BackendInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const { body } = request;
//     console.log('HTTP Request for ' + request.urlWithParams + ' is being responded to locally.');
//     console.log('request', request);
//
//     return of(null).pipe(
//       mergeMap(handleRoute),
//       materialize(),
//       delay(500),
//       dematerialize()
//     );
//
//     function handleRoute() {
//       switch (true) {
//         case checkUrl(request, endpoints.bases):
//           return getSportBases();
//         case request.url.match(/\/bases\/\d+$/) && request.method === 'GET':
//           const baseId = idFromUrl(request);
//           return getBaseById(baseId);
//         case checkUrl(request, endpoints.articles):
//           return getArticles();
//         case request.url.match(/\/articles\/\d+$/) && request.method === 'GET':
//           const articleId = idFromUrl(request);
//           return getArticle(articleId);
//         default:
//           return next.handle(request);
//       }
//     }
//   }
// }
