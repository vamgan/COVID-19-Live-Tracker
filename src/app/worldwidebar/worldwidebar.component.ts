import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { WorldwideService } from '../worldwide/worldwide.service';

@Component({
  selector: 'app-worldwidebar',
  templateUrl: './worldwidebar.component.html',
  styleUrls: ['./worldwidebar.component.css']
})
export class WorldwidebarComponent implements OnInit {
  WorldDataC: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmed Cases' },
    { data: [], label: 'Recovered Cases' }
  ];
  WorldDataR: any;
  constructor(private worldservice: WorldwideService) { }

  ngOnInit() {
    this.worldservice.GetConfirmedData().subscribe((WorldDataC) => {
    this.WorldDataC = WorldDataC;
    this.getConfirmedCases(this.WorldDataC);
    });
    this.worldservice.GetRecoveredData().subscribe((WorldDataR) => {
      this.WorldDataR = WorldDataR;
      this.getRecoveredCases(this.WorldDataR);
      });

  }


  public getConfirmedCases(WorldDataC: any) {
    let i = 0;
    for (i = 0 ; i < 10; i++) {
        this.barChartLabels.push(WorldDataC[i].country);
        this.barChartData[0].data.push(WorldDataC[i].cases);
    }

  }
  public getRecoveredCases(WorldDataR: any) {
    let i = 0;
    for (i = 0 ; i < 10; i++) {
        this.barChartData[1].data.push(WorldDataR[i].recovered);
    }

  }
}

