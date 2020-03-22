import { Component, OnInit } from '@angular/core';
import {CovidAPI} from '../api.constant';

import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.css']
})
export class WorldwideComponent implements OnInit {
  WorldData: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('https://corona.lmao.ninja/all')
      .subscribe((WorldData) => this.WorldData = WorldData );

  }

}

