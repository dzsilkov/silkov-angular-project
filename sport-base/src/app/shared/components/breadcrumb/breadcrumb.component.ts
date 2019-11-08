import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router, RouterEvent} from "@angular/router";
import {filter, map, tap} from "rxjs/operators";
import {Breadcrumb} from "../../models/breadcrumb";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Breadcrumb[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .pipe(
        map(() => this.activatedRoute),
        tap(console.log)
      )
      .pipe(
        map((route) => {
        while (route.firstChild)
        {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(
        tap(console.log),
        filter(route => route.outlet === PRIMARY_OUTLET)
      )
      .subscribe(route => {

        const snapshot = this.router.routerState.snapshot;
        this.breadcrumbs = [];
        const url = snapshot.url;
        const routeData = route.snapshot.data;
        console.log(routeData);
        const label = routeData['breadcrumb'];
        const params = snapshot.root.params;
        this.breadcrumbs.push({
          url: url,
          label: label,
          params: params
        });
        console.log(this.breadcrumbs);
      });
  }
}
