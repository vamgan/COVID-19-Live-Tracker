import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {HomeService} from '../home.service';
import {Response} from '../../response';
@Component({
  selector: 'app-dailyind',
  templateUrl: './dailyind.component.html',
  styleUrls: ['./dailyind.component.css']
})
export class DailyindComponent implements OnInit {
  casesTimeSeries: any;
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmed' },
    { data: [], label: 'Recovered'},
    { data: [], label: 'Deaths', type: 'line', order: 2 }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
    }],
    yAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
      }
  }]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'bar';
  public lineChartPlugins = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.GetIndiaData()
      .subscribe((response: Response) => {
        this.casesTimeSeries = response;
        this.getDailyConfirmed(this.casesTimeSeries);

  });

  }
  public getDailyConfirmed(daily: any) {
    let i = 0;
    let a = 0;
    a = daily.cases_time_series.length;
    for (i = a - 15; i <= a; i++) {
      this.lineChartLabels.push(daily.cases_time_series[i].date);
      this.lineChartData[0].data.push(daily.cases_time_series[i].dailyconfirmed);
      this.lineChartData[1].data.push(daily.cases_time_series[i].dailyrecovered);
      this.lineChartData[2].data.push(daily.cases_time_series[i].dailydeceased);
    }

}
}
