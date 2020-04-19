import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { HttpClient } from '@angular/common/http';
import { Response } from '../response';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-statestats',
  templateUrl: './statestats.component.html',
  styleUrls: ['./statestats.component.css']
})
export class StatestatsComponent implements OnInit {
  ipAddress: number;
  UserData: any;
  urlapi: any;
  statewise: any;
  userstate: any;
  DistrictData: any;
  district = [];
  page = 1;
  pageSize = 7;
  today = new Date();
  constructor(private homeService: HomeService, private http: HttpClient) {
    this.getIP();
  }

  ngOnInit(): void {
    this.homeService.GetIndiaData()
      .subscribe((response: Response) => {
        this.statewise = response.statewise;
      });
  }

  public getIP() {
    this.homeService.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
      this.getUserState(this.ipAddress);
    });
  }

  public getUserState(ip: any) {
    this.urlapi = 'https://ipapi.co/ipAddress/json/';
    this.urlapi = this.urlapi.replace('ipAddress', ip);
    this.http.get(this.urlapi)
      .subscribe((UserData) => {
        this.UserData = UserData;
        this.UserState(this.UserData.region);
      });
  }

  public UserState(userdata: any) {
    for (const data of this.statewise) {
      if (data.state === userdata) {
        this.userstate = data;
      }
    }
    this.http.get('https://api.covid19india.org/v2/state_district_wise.json')
      .subscribe((districtdata) => {
        this.DistrictData = districtdata;
        this.getDistrictData(this.userstate.state, this.DistrictData);
      });
  }

  public getDistrictData(state, districtWise) {
    for (const data of districtWise) {
      if (data.state === state) {
        this.district.push(data.districtData);
        this.district = this.district[0];
        this.district.sort((a, b) => b.confirmed - a.confirmed);
      }
    }
  }

  public lastUpdate(date) {
    const day = date.slice(0, 2);
    const month = date.slice(3, 5);
    const year = date.slice(6, 10);
    const time = date.slice(11);
    return formatDistance(new Date(`${year}-${month}-${day}T${time}+05:30`), this.today);
    }
}
