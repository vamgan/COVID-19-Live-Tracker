import { Component, OnInit } from '@angular/core';

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

  constructor(private http: HttpClient, private worldService: WorldwideService) { }

  ngOnInit() {
      this.http.get('https://corona.lmao.ninja/all')
      .subscribe((WorldData) => this.WorldData = WorldData );
      this.http.get('https://corona.lmao.ninja/countries')
      .subscribe((CountryData) => this.CountryData = CountryData );
      this.worldService.GetConfirmedData()
      .subscribe(data => this.CountryDataC = data );

  }

}

