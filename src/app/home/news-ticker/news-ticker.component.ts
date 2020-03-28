import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  constructor(private http: HttpClient) { }
  News: any;
  ngOnInit() {
    this.http.get('https://v2-api.sheety.co/e2ef74c7336cba348997abf1ef8b70b5/covid19Api/news')
    .subscribe((news) => this.News = news );
    debugger;
    
  }

}
