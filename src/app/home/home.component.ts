import { Component, OnInit } from '@angular/core';
import {CovidAPI} from '../api.constant';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  IndiaData: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('https://api.covid19india.org/data.json')
      .subscribe((IndiaData) => this.IndiaData = IndiaData );

  }

}
