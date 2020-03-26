import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorldwideService {

  constructor() { }

  public GetConfirmedData() {
    return this.http.get('https://corona.lmao.ninja/countries?sort=confirmed')
    .pipe(map(response => response));
  }

  public GetRecoveredData() {
    return this.http.get('https://corona.lmao.ninja/countries?sort=recovered')
    .pipe(map(response => response));
  }
}
