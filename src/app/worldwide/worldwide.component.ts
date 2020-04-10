import { Component, OnInit } from '@angular/core';
import { fromUnixTime, formatDistance, getUnixTime } from 'date-fns';
import {NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {WorldwideService} from './worldwide.service';

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.css']
})
export class WorldwideComponent implements OnInit {
  WorldData: any;
  CountryData: any;
  CountryDataC: any;
  page = 1;
  pageSize = 15;
  temp: any;
  value: any;

  constructor(private http: HttpClient, private worldService: WorldwideService) { }

  ngOnInit() {
      this.http.get('https://corona.lmao.ninja/all')
      .subscribe((WorldData) => this.WorldData = WorldData );
      this.http.get('https://corona.lmao.ninja/countries')
      .subscribe((CountryData) => this.CountryData = CountryData );
      this.worldService.GetConfirmedData()
      .subscribe(data => {
        this.CountryDataC = data;
        this.temp = data;
      });

  }
  public lastUpdate(data) {
    const convert =  fromUnixTime(data / 1000);
    return formatDistance(convert, new Date());
  }

  public updateFilter(val: any) {
    const value = val.srcElement.value.toString().toLowerCase().trim();
    const key = 'country';
    this.CountryDataC = this.temp.filter(item => {
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

