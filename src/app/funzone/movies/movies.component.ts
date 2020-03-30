import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.gocovid19.in/movies.json')
    .subscribe(data => this.moviesData = data);
  }

}
