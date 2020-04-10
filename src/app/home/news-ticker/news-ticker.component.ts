import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromUnixTime, formatDistance } from 'date-fns';
import { type } from 'os';
@Component({
  selector: 'app-news-ticker',
  templateUrl: './news-ticker.component.html',
  styleUrls: ['./news-ticker.component.css']
})
export class NewsTickerComponent implements OnInit {
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2500
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  constructor(private http: HttpClient) {
  }
  News: any;
  updatesobj = [];
  ngOnInit() {
    this.http.get('https://api.covid19india.org/updatelog/log.json')
      .subscribe((news) => {
        this.News = news;
        this.updates(this.News);
      });
  }

  slickInit(e) {

  }

  breakpoint(e) {

  }

  afterChange(e) {

  }

  beforeChange(e) {

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
  }
}
