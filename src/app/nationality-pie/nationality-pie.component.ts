import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

import {HttpClient} from '@angular/common/http';
import { count } from 'console';

@Component({
  selector: 'app-nationality-pie',
  templateUrl: './nationality-pie.component.html',
  styleUrls: ['./nationality-pie.component.css']
})
export class NationalityPieComponent implements OnInit {
  InCount = 0;
  ItCount = 0;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  nationalityObj: any;

  constructor(private http: HttpClient) {
  }
nationalityData: any;
country: Array<any> = [];
count: Array = [];

 ngOnInit() {
   this.http.get('https://api.covid19india.org/raw_data.json')
     .subscribe((response) => {
       this.nationalityData = response.raw_data;
       this.getnationality(this.nationalityData);
     });
 }

 public getnationality(nationalityData: any) {
  const nationalityObj = {};

  nationalityData.map((obj) => {
     if (nationalityObj[obj.nationality]) {
         nationalityObj[obj.nationality] += 1;
     } else {
         nationalityObj[obj.nationality] = 1;
     }
  });
  for (const [key, value] of Object.entries(nationalityObj)) {
    this.pieChartLabels.push(key);
    this.count.push(value);
    this.pieChartData.push(this.count);
  }
   }
 }
