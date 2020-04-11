declare var require: any;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const Uganda = require('@highcharts/map-collection/countries/ug/ug-all.geo.json');
MapModule(Highcharts);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {
  title = 'app';
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = 'mapChart';
  chartCallback;
  chartOptions = {
    chart: {
      map: Uganda
    },
    title: {
      text: 'Highmaps basic demo'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    colorAxis: {
      min: 0
    },
    series: [{
      name: 'Random data',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: [
      ]
   }]};

  }
