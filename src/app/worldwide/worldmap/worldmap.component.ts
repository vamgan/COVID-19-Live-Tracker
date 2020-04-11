declare var require: any;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import { HttpClient } from '@angular/common/http';
const World = require('@highcharts/map-collection/custom/world.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css'],
})
export class WorldmapComponent implements OnInit {
  CountryData: any;
  mapData = [];
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartCallback;
  chartOptions = {
    chart: {
      map: 'custom/world',
    },
    title: {
      text: 'Statistics By Country',
    },
    credits: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },
    colorAxis: {
      min: 0,
      minColor: '#fff4f0',
      maxColor: '#c41a1d',
    },
    series: [],
  };

  constructor(private http: HttpClient) {
    const self = this;
    this.chartCallback = (chart) => {
      self.chart = chart;
    };
  }

  ngOnInit() {
    this.http
      .get('https://corona.lmao.ninja/countries')
      .subscribe((CountryData) => {
        (this.CountryData = CountryData), this.setMapData(this.CountryData);
      });
  }

  public setMapData(CountryData: any) {
    for (const data1 of CountryData) {
      if (data1.countryInfo.iso2) {
        this.mapData.push([data1.countryInfo.iso2.toLowerCase(), data1.cases]);
      }
    }

    this.chartOptions.series.push({
      mapData: World,
      data: this.mapData,
      name: 'Confirmed Cases',
      states: {
        hover: {
          color: '#a5d7fd',
        },
      },
    });
    this.updateFromInput = true;
  }
}
