import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home/home.service';
import {HttpClient} from '@angular/common/http';
import {Response} from '../response';
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
  for ( const data of this.statewise) {
    if ( data.state === userdata) {
      this.userstate = data;
      console.log(this.userstate);
    }
  }


}
}
