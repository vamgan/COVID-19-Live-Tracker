import { Component, OnInit , HostListener} from '@angular/core';
import {HomeService} from './home.service';
import {Response} from '../response';
import {Rawdata} from '../rawdata';
import { formatDistance } from 'date-fns';

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

  constructor(private homeService: HomeService) { }

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
