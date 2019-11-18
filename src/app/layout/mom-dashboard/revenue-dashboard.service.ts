import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRevenueDashboard } from './dashboard';
import { tap, map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RevenueDashboardService {
  private serviceUrl =  environment.dashboardUrl;

  constructor(private http: HttpClient) { }

  public getRevenueDashboard(): Observable< IRevenueDashboard[] > {
    return this.http.get<IRevenueDashboard[]>(this.serviceUrl);

  }


  public getDashboardResponse() {
    return this.http.get(this.serviceUrl)
      .pipe(map(result => result));
  }

}
