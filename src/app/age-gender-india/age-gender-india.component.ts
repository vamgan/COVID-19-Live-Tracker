import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { Label } from 'ng2-charts';

import {HomeService} from '../home/home.service';
import {Rawdata} from '../rawdata';

@Component({
  selector: 'app-age-gender-india',
  templateUrl: './age-gender-india.component.html',
  styleUrls: ['./age-gender-india.component.css']
})
export class AgeGenderIndiaComponent implements OnInit {
  genderData: any;
  ageGroup: any;
  maleAgeData: Array<any> = [];
  femaleAgeData: Array<any> = [];

  public maleAgeGroup = {
    '1-10': 0,
    '11-20': 0,
    '21-30': 0,
    '31-40': 0,
    '41-50': 0,
    '51-60': 0,
    '61-70': 0,
    '71-80': 0,
    '81-100': 0
  };

  public femaleAgeGroup = {
    '1-10': 0,
    '11-20': 0,
    '21-30': 0,
    '31-40': 0,
    '41-50': 0,
    '51-60': 0,
    '61-70': 0,
    '71-80': 0,
    '81-100': 0
  };

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['1-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-100'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Male' },
    { data: [], label: 'Female' }
  ];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.GetPatientData()
    .subscribe((data: Rawdata) => {
      this.genderData = data.raw_data;
      this.getGenderStats(this.genderData);
    });
  }

  public getGenderStats(genderData: any) {
    genderData.map((obj) => {
      if (obj.gender) {
        if (obj.agebracket) {
              this.ageGroup = this.getAgeGroup(obj.agebracket);
              if (obj.gender === 'M') {
                this.maleAgeGroup[this.ageGroup] += 1;
              } else {
                this.femaleAgeGroup[this.ageGroup] += 1;
              }
        }
      }
  });

    this.maleAgeData =  Object.keys(this.maleAgeGroup).map((key) => {
        return this.maleAgeGroup[key];
    });

    this.femaleAgeData = Object.keys(this.femaleAgeGroup).map((key) => {
      return this.femaleAgeGroup[key];
  });

    this.barChartData[0].data = this.maleAgeData;
    this.barChartData[1].data = this.femaleAgeData;

  }

  public getAgeGroup(ageData: any) {
    let age;
    age = Number(ageData);
    let ageGroup;
    if (age < 51) {
          if (age < 11) {
              ageGroup = '1-10';
          } else if (age < 21) {
              ageGroup = '11-20';
          } else if (age < 31) {
              ageGroup = '21-30';
          } else if (age < 41) {
              ageGroup = '31-40';
          } else {
              ageGroup = '41-50';
          }
      } else {
          if (age < 61) {
              ageGroup = '51-60';
          } else if (age < 71) {
              ageGroup = '61-70';
          } else if (age < 81) {
              ageGroup = '71-80';
          } else {
              ageGroup = '81-100';
          }
      }
    return ageGroup;
  }

  }


