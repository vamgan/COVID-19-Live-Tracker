import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  IndiaData: any;
  casesTimeSeries: any;
  keyValues: any;
  statewise: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('https://api.covid19india.org/data.json')
      .subscribe((response) => {
        this.IndiaData = response;
        this.casesTimeSeries = response.cases_time_series;
        this.keyValues = response.key_values[0];
        this.statewise = response.statewise;
      });

  }


}
