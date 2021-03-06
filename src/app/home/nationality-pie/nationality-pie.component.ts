import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';

import {HomeService} from '../home.service';
import {Rawdata} from '../../rawdata';



@Component({
  selector: 'app-nationality-pie',
  templateUrl: './nationality-pie.component.html',
  styleUrls: ['./nationality-pie.component.css']
})
export class NationalityPieComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Color[] = [
    {
      backgroundColor: ['#66a4fb', '#f2b8ff', '#fec85e', '#4cebb5', '#a5d7fd', '#ff7c8f', '#b2bece', '#a4e063'],
    },
  ];
  nationalityObj: any;

  constructor(private homeService: HomeService) {
  }
nationalityData: any;


 ngOnInit() {
   this.homeService.GetPatientData()
     .subscribe((response: Rawdata) => {
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
    if (key === '') {
      this.pieChartLabels.push('Unknown');
      this.pieChartData.push(Number(value));
    } else {
    this.pieChartLabels.push(key);
    this.pieChartData.push(Number(value));
    }
  }
   }
 }
