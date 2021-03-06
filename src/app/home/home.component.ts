import { Component, OnInit , HostListener} from '@angular/core';
import {HomeService} from './home.service';
import {Response} from '../response';
import {Rawdata} from '../rawdata';
import { formatDistance } from 'date-fns';
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  IndiaData: any;
  casesTimeSeries: any;
  keyValues: any;
  statewise: any;
  affectedStateCount = 0;
  rawData: any;
  countHospitalized = 0;
  districtWise: any;
  kerala: [];
  isShow: boolean;
  topPosToStartShowing = 100;
  stateSort: any;
  today: Date = new Date();
  rows: any;
  temp: any;
  page = 1;
  pageSize = 10;
  ipAddress: any;
  urlapi: any;
  UserData: any;

  constructor(private homeService: HomeService, private meta: Meta,  private http: HttpClient) {
    meta.addTags([
      {name: 'description', content: 'Data Visualisation and Live Tracker for the COVID-19 virus outbreak in India & Worldwide'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'robots', content: 'INDEX, FOLLOW'},
      {name: 'author', content: 'Vam & Astha'},
      // tslint:disable-next-line:max-line-length
      {name: 'keywords', content: 'COVID-19, India, Live updates, Corona Virus Live updates, Dashboard, Coronavirus India Updates, coronavirus india latest news, coronavirus india, Coronavirus In India, Coronavirus cases in India, coronavirus, COVID-19 India, Corona'},
      {name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD'},
      {httpEquiv: 'Content-Type', content: 'text/html'},
      {property: 'og:title', content: 'COVID-19 outbreak in India'},
      {property: 'og:type', content: 'website'},
      {charset: 'UTF-8'}
   ], true);
  }
  ngOnInit() {
      this.homeService.GetIndiaData()
      .subscribe((response: Response) => {
        this.IndiaData = response;
        this.casesTimeSeries = response.cases_time_series;
        this.statewise = response.statewise;
        this.temp = response.statewise;
        this.stateSort = this.statewise;
        this.stateSort.sort((a, b) => (b.confirmed - a.confirmed));
        this.rows = this.stateSort;
        this.AffectedState(this.statewise);
      });

      this.homeService.GetPatientData()
      .subscribe((data: Rawdata) => {
        this.rawData = data.raw_data;
        this.CountHospitalized(this.rawData);
      });


    }

  public AffectedState(stateWise: any) {
    for (const data of stateWise) {
      if (data.confirmed !== '0') {
        this.affectedStateCount += 1;
      }
    }
  }

  public CountHospitalized(rawData: any) {
    for (const data of rawData) {
      if (data.currentstatus === 'Hospitalized') {
        this.countHospitalized += 1;
      }
    }
  }

  public GetDistrict(state: any) {
    let keys;
    this.homeService.GetDistrictData()
      .subscribe((data) => {
        this.districtWise = data;
      });
    keys = Object.keys(this.districtWise[state].districtData);
    keys.sort((a, b) => (this.districtWise[state].districtData[b].confirmed - this.districtWise[state].districtData[a].confirmed));
    return keys;
  }

  public lastUpdate(date) {
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6, 10);
  const time = date.slice(11);
  return formatDistance(new Date(`${year}-${month}-${day}T${time}+05:30`), this.today);
  }



  public updateFilter(val: any) {
    const value = val.srcElement.value.toString().toLowerCase().trim();
    const key = 'state';
    this.stateSort = this.temp.filter(item => {
        if (
          (item[key] &&
            item[key]
              .toString()
              .toLowerCase()
              .indexOf(value) !== -1) ||
          !value
        ) {
          return true;
        }
    });
  }

}
