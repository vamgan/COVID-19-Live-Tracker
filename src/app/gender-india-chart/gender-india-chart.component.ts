import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-gender-india-chart',
  templateUrl: './gender-india-chart.component.html',
  styleUrls: ['./gender-india-chart.component.css']
})
export class GenderIndiaChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public pieChartColors: Color[] = [
    {
      backgroundColor: ['#66a4fb', '#f2b8ff', '#fec85e', '#4cebb5', '#a5d7fd', '#ff7c8f', '#b2bece', '#a4e063'],
    },
  ];
  constructor(private http: HttpClient) {
  }
genderData: any;

  ngOnInit() {
    this.http.get('https://api.covid19india.org/raw_data.json')
     .subscribe((response) => {
       this.genderData = response.raw_data;
       this.getGender(this.genderData);
     });
  }
  public getGender(genderData: any) {
    const genderObj = {};
    genderData.map((obj) => {
      if (genderObj[obj.gender]) {
          genderObj[obj.gender] += 1;
      } else {
          genderObj[obj.gender] = 1;
      }
   });
    for (const [key, value] of Object.entries(genderObj)) {
    if (key === '') {
      this.doughnutChartLabels.push('Unidentified');
      this.doughnutChartData.push(Number(value));
    } else {
    this.doughnutChartLabels.push(key);
    this.doughnutChartData.push(Number(value));
    }
  }

  }

}
