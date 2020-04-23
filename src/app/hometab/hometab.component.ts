import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-hometab',
  templateUrl: './hometab.component.html',
  styleUrls: ['./hometab.component.css']
})
export class HometabComponent implements OnInit {
  active = 1;
  ipAddress: any;
  urlapi: any;
  UserData: any;
  constructor(private homeService: HomeService, private http: HttpClient) { 
    this.getIP();
  }

  ngOnInit(): void {
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
      });
  }

}
