import { Component, OnInit } from '@angular/core';

import {HomeService} from './home.service';
import {Response} from '../response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  IndiaData: any;
  casesTimeSeries: any;
  keyValues: any;
  statewise: any;
  affectedStateCount = 0;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
      this.homeService.GetIndiaData()
      .subscribe((response: Response) => {
        this.IndiaData = response;
        this.casesTimeSeries = response.cases_time_series;
        this.keyValues = response.key_values;
        this.statewise = response.statewise;
        this.AffectedState(this.statewise);
      });

  }

  public AffectedState(stateWise: any) {
    for (const data of stateWise) {
      if (data.confirmed !== '0') {
        this.affectedStateCount += 1;
      }
    }
  }



}
