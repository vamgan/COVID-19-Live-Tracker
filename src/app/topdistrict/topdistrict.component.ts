import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topdistrict',
  templateUrl: './topdistrict.component.html',
  styleUrls: ['./topdistrict.component.css']
})
export class TopdistrictComponent implements OnInit {
  @Input() UserState: string;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmed' }
  ];
  countstate = 0;
  DistrictData: any;
  district: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.covid19india.org/v2/state_district_wise.json')
      .subscribe((districtdata) => this.DistrictData = districtdata);
  }
  public pushDatatoChart(districtdata: any) {
    for (const data of districtdata) {
      if (data.state === this.UserState) {
        this.district.push(data.districtData);
        this.district.sort((a, b) => b.confirmed - a.confirmed);
        for (const d of this.district) {
          if (this.countstate < 10) {
            this.barChartData[0].data.push(d.confirmed);
            this.barChartLabels.push(d.district);
            this.countstate += 1;
          }
        }
      }
    }
  }
}
