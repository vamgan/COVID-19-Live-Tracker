import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import {HomeService} from '../home/home.service';
import {Response} from '../response';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})

export class MyLineChartComponent implements OnInit {
    IndiaData: any;
    casesTimeSeries: any;
    keyValues: any;
    statewise: any;
    countstate: any;

  public lineChartData: ChartDataSets[] = [
    { data: [], fill: true , label: 'State wise cases'},
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
            display: true,
              beginAtZero: true,
              maxTicksLimit: 5,
          },
          gridLines: {
              display: false
          }
      }],
      xAxes: [{
          gridLines: {
            display: true
          },
          ticks: {
            display: true
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


  constructor(private homeService: HomeService) {
   }

  ngOnInit() {
    this.homeService.GetIndiaData()
      .subscribe((response: Response) => {
        this.casesTimeSeries = response.cases_time_series;
        this.keyValues = response.key_values;
        this.statewise = response.statewise;
        this.getStateName(this.statewise);
      });
  }
  public getStateName(stateWise: any): any {
    this.countstate = 0;
    for ( const data of stateWise) {
      if (data.state !== 'Total') {
        if (data.confirmed !== '0') {
          if ( this.countstate < 10) {
            this.lineChartLabels.push(data.state);
            this.lineChartData[0].data.push(data.confirmed);
            this.countstate += 1;
          } else {
            break;
          }
      }
    }

    }
  }


}
