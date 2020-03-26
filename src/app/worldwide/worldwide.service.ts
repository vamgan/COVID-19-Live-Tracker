import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldwideService {

  constructor(private http: HttpClient) { }

  public GetConfirmedData() {
    return this.http.get('https://corona.lmao.ninja/countries?sort=cases')
    .pipe(map(response => response));
  }

  public GetRecoveredData() {
    return this.http.get('https://corona.lmao.ninja/countries?sort=recovered')
    .pipe(map(response => response));
  }
}
