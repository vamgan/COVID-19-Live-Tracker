declare var require: any;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import { Observable } from 'rxjs';
import {HomeService} from '../home.service';
import {Response} from '../../response';
const India = require('@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  statewise: any;
  stateData = [];
  value = [];
  title = 'app';
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartCallback;
  chartOptions = {
    chart: {
      map: 'countries/in/in-all'
    },
    title: {
      text: 'Statistics By State'
      },
      credits: {
          enabled: false
      },
      mapNavigation: {
      enabled: true,
      buttonOptions: {
              verticalAlign: 'bottom'
          }
      },
      colorAxis: {
          min: 0,
          minColor: '#fff4f0',
          maxColor: '#c41a1d'
      },
      series: [],
  };

  constructor(private homeService: HomeService) {
    const self = this;
    this.chartCallback = chart => {
      self.chart = chart;
    };
  }

  ngOnInit() {
    this.homeService.GetIndiaData()
      .subscribe((response: Response) => {
        this.statewise = response.statewise,
        this.setMapData(this.statewise);
      });
  }


  public setMapData(statewise) {
    for (const data1 of statewise) {
     // tslint:disable-next-line: radix
     if (data1.state !== 'Total') {
      // tslint:disable-next-line: radix
      this.stateData.push([(data1.state).toLowerCase(), parseInt(data1.confirmed)]);
     }
    }

    this.chartOptions.series.push({
      mapData: India,
          data: this.stateData,
          Animation: true,
          name: 'Confirmed Cases',
          tooltip: {
            // tslint:disable-next-line:object-literal-shorthand
            /* formatter: function() {
              // tslint:disable-next-line:no-var-keyword
              var s = this.key + '<br/>';
              s += 'Deaths' + this.point.statewise.deaths + '<br/>';
              s += 'Recovered' + this.point.statewise.recovered;
              return s;
            } */
          },
          states: {
              hover: {
                  color: '#a5d7fd'
              }
          }
    });
    this.updateFromInput = true;
  }
}
