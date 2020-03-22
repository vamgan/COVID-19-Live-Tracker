import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

import {HttpClient} from '@angular/common/http';

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
  public pieChartLabels: Label[] = ['India', 'Italy'];
  public pieChartData: SingleDataSet = [this.InCount, this.ItCount];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private http: HttpClient) {
  }
nationality: any;

 ngOnInit() {
   this.http.get('https://api.covid19india.org/raw_data.json')
     .subscribe((response) => {
       this.nationality = response.raw_data;
       this.getnationality(this.nationality);
     });
 }
 public getnationality(nationality: any): any {
   for ( const data of nationality) {
     if (data.nationality === 'India') {
       this.InCount++;
     } else if (data.nationality === 'Italy') {
      this.ItCount++;

     }

   }
 }

}
