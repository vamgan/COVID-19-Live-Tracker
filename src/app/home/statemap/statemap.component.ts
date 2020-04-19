declare var require: any;

import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import { Observable } from 'rxjs';
import {HomeService} from '../home.service';
import {Response} from '../../response';
import { HttpClient } from '@angular/common/http';
import {StatestatsComponent} from '../../statestats/statestats.component';
const andamannicobarislands = require('../../../assets/stateMap/andamannicobarislands.json');
const andhrapradesh = require('../../../assets/stateMap/andhrapradesh.json');
const arunachalpradesh = require('../../../assets/stateMap/arunachalpradesh.json');
const assam = require('../../../assets/stateMap/assam.json');
const bihar = require('../../../assets/stateMap/bihar.json');
const chandigarh = require('../../../assets/stateMap/chandigarh.json');
const chhattisgarh = require('../../../assets/stateMap/chhattisgarh.json');
const dadranagarhaveli = require('../../../assets/stateMap/dadranagarhaveli.json');
const delhi = require('../../../assets/stateMap/delhi.json');
const goa = require('../../../assets/stateMap/goa.json');
const gujarat = require('../../../assets/stateMap/gujarat.json');
const haryana = require('../../../assets/stateMap/haryana.json');
const himachalpradesh = require('../../../assets/stateMap/himachalpradesh.json');
const india = require('../../../assets/stateMap/india.json');
const jammukashmir = require('../../../assets/stateMap/jammukashmir.json');
const jharkhand = require('../../../assets/stateMap/jharkhand.json');
const karnataka = require('../../../assets/stateMap/karnataka.json');
const kerala = require('../../../assets/stateMap/kerala.json');
const ladakh = require('../../../assets/stateMap/ladakh.json');
const lakshadweep = require('../../../assets/stateMap/lakshadweep.json');
const madhyapradesh = require('../../../assets/stateMap/madhyapradesh.json');
const maharashtra = require('../../../assets/stateMap/maharashtra.json');
const manipur = require('../../../assets/stateMap/manipur.json');
const meghalaya = require('../../../assets/stateMap/meghalaya.json');
const mizoram = require('../../../assets/stateMap/mizoram.json');
const nagaland = require('../../../assets/stateMap/nagaland.json');
const odisha = require('../../../assets/stateMap/odisha.json');
const puducherry = require('../../../assets/stateMap/puducherry.json');
const punjab = require('../../../assets/stateMap/punjab.json');
const rajasthan = require('../../../assets/stateMap/rajasthan.json');
const sikkim = require('../../../assets/stateMap/sikkim.json');
const tamilnadu = require('../../../assets/stateMap/tamilnadu.json');
const telangana = require('../../../assets/stateMap/telangana.json');
const tripura = require('../../../assets/stateMap/tripura.json');
const uttarakhand = require('../../../assets/stateMap/uttarakhand.json');
const uttarpradesh = require('../../../assets/stateMap/uttarpradesh.json');
const westbengal = require('../../../assets/stateMap/westbengal.json');

MapModule(Highcharts);

@Component({
  selector: 'app-statemap',
  templateUrl: './statemap.component.html',
  styleUrls: ['./statemap.component.css']
})
export class StatemapComponent implements OnInit {
  @Input() UserState: string;
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
  ipAddress: any;
  urlapi: string;
  UserData: any;
  statewise: any;
  stateData = [];
  ipData: any;

  constructor(private http: HttpClient, private homeService: HomeService) {

   }

  ngOnInit(): void { }


}
