import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testedchart',
  templateUrl: './testedchart.component.html',
  styleUrls: ['./testedchart.component.css']
})
export class TestedchartComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'People tested  Positive Today' },
    { data: [], label: 'People tested Today' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private http: HttpClient) { }
  tested: any;
  ngOnInit() {
    this.http.get('https://api.covid19india.org/data.json')
      .subscribe((tested) => {
        this.tested = tested;
        this.TestedData(this.tested);
      });
  }
  public TestedData(data) {
    for ( const i of data.tested) {
      if (i.positivecasesfromsamplesreported !== '') {
        this.lineChartData[1].data.push(i.samplereportedtoday);
        this.lineChartData[0].data.push(i.positivecasesfromsamplesreported);
        const day = i.updatetimestamp.slice(0, 5);
        this.lineChartLabels.push(day);
      }
    }

  }

}
