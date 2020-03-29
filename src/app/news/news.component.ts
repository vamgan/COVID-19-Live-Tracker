import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  News: any;
  ngOnInit() {
    this.http.get('https://gocovid19.in/news/news?category=Coronavirus')
    .subscribe((news) => this.News = news );

  }

}
