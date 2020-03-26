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
  WorldData: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];
  countstate: number;

  constructor(private worldservice: WorldwideService) { }

  ngOnInit() {
    this.worldservice.GetConfirmedData().subscribe((WorldData) => this.WorldData = WorldData);
    this.getConfirmedCases(this.WorldData);
  }
  public getConfirmedCases(WorldData: any) {
    this.countstate = 0;
    for (const data of WorldData) {
      if (this.countstate < 10) {
        this.barChartLabels.push(data[this.countstate].country);
        this.barChartData.push(data[this.countstate].cases);
        this.countstate += 1;
      }
    }

  }
}
