declare var require: any;

import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const India = require('@highcharts/map-collection/countries/in/custom/in-all-disputed.geo.json');
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
          minColor:'#fff4f0',
          maxColor: '#c41a1d'
      },
      series: [{
          mapData: India,
          data: [
            ['lakshadweep', 0],
            ['west bengal', 0],
            ['odisha', 0],
            ['sikkim',0],
            ['daman and diu',0],
            ['puducherry',0],
            ['dadara and nagar havelli',0],
            ['bihar', 0],
            ['chhattisgarh', 0],
            ['tamil nadu', 0],
            ['madhya pradesh', 0],
            ['gujarat', 0],
            ['goa', 0],
            ['meghalaya',0],
            ['nagaland', 0],
            ['manipur', 0],
            ['arunanchal pradesh', 0],
            ['andaman and nicobar',0],
            ['mizoram', 0],
            ['tripura', 0],
            ['jharkhand', 0],
            ['telangana',0],
            ['nct of delhi', 0],
            ['haryana', 0],
            ['chandigarh', 0],
            ['himachal pradesh', 0],
            ['jammu and kashmir', 0],
            ['kerala', 0],
            ['karnataka', 0],
            ['maharashtra', 0],
            ['assam', 0],
            ['andhra pradesh', 0],
            ['punjab', 0],
            ['rajasthan', 0],
            ['uttar pradesh', 0],
            ['uttarakhand', 0]
        ],
          name: 'Confirmed Cases',
          states: {
              hover: {
                  color: '#a5d7fd'
              }
          }
      }],
  };
}
