import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromUnixTime, formatDistance } from 'date-fns';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  showNoti = true;
  News: any;
  updatesobj = [];
  newsObj = [];
  toogleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.covid19india.org/updatelog/log.json')
      .subscribe((news) => {
        this.News = news;
        this.updates(this.News);
      });
  }

  public onNotiClick() {
    this.showNoti = !this.showNoti;
  }
  public getDate(data) {
    const convert = fromUnixTime(data);
    const a = convert.getDate();
    const month = convert.toLocaleString('default', { month: 'long' });
    return (a + ' ' + month);
  }
  public lastUpdate(data) {
    const convert = fromUnixTime(data);
    return formatDistance(convert, new Date());
  }
  public gdate() {
    const a = new Date();
    const b = a.getDate();
    const month = a.toLocaleString('default', { month: 'long' });
    return (b + ' ' + month);
  }
  public updates(data) {
    // tslint:disable-next-line:prefer-const
    for (let i of data) {
      if (this.gdate() === this.getDate(i.timestamp)) {
        this.updatesobj.push(i);
      }

    }
    this.updatesobj.reverse();
    for (let j = 0; j < 5; j++){
      this.newsObj.push(this.updatesobj[j]);
    }
  }

}
