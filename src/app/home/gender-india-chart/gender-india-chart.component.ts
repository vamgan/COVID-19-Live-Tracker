import { Component, OnInit } from '@angular/core';
import { ChartType} from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';
import pluginDataLabels from 'chartjs-plugin-datalabels';
import { HomeService } from '../home.service';
import { Rawdata } from '../../rawdata';

@Component({
  selector: 'app-gender-india-chart',
  templateUrl: './gender-india-chart.component.html',
  styleUrls: ['./gender-india-chart.component.css']
})
export class GenderIndiaChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartPlugins = [pluginDataLabels];
  public doughnutChartLegend = true;
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: ['#66a4fb', '#f2b8ff', '#fec85e'],
    },
  ];
  constructor(private homeService: HomeService) {
  }
  genderData: any;

  ngOnInit() {
    this.homeService.GetPatientData()
      .subscribe((response: Rawdata) => {
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
