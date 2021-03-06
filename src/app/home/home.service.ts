import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public GetIndiaData() {
    return this.http.get('https://api.covid19india.org/data.json')
    .pipe(map(response => response));
  }

  public GetPatientData() {
    return this.http.get('https://api.covid19india.org/raw_data.json')
    .pipe(map(response => response));
  }

  public GetDistrictData() {
    return this.http.get('https://api.covid19india.org/state_district_wise.json')
    .pipe(map(response => response));
  }
  public getIPAddress() {
    return this.http.get('https://api.ipify.org/?format=json');
  }
}
