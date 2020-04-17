import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-essentials',
  templateUrl: './essentials.component.html',
  styleUrls: ['./essentials.component.css']
})
export class EssentialsComponent implements OnInit {
  // tslint:disable-next-line: no-output-native
  essentialData: any;
  states = [];
  cities = [];
  categories = [];
  length: any;
  stateSelected: any;
  citySelected: any;
  categorySelected: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.covid19india.org/resources/resources.json')
      .subscribe((data) => {
        this.essentialData = data;
        this.getStates(this.essentialData);
      });
}

  public getStates(essentialData: any) {
    this.length = essentialData.resources.length;
    let data;
    let i;
    for ( i = 0; i < this.length; i++) {
      data = essentialData.resources[i];
      if (!this.states.includes(data.state)) {
        this.states.push(data.state);
      }
    }
  }

  public OnStateSelect(data: any) {
    this.cities = [];
    this.categories = [];
    this.stateSelected = data.srcElement.value;
    let i;
    let value;
    for ( i = 0; i < this.length; i++ ) {
      value = this.essentialData.resources[i];
      if ( value.state === this.stateSelected ) {
        if (!this.cities.includes(value.city) && value.state === this.stateSelected) {
          this.cities.push(value.city);
        }
        if (!this.categories.includes(value.category)) {
          this.categories.push(value.category);
        }
      }
    }
}

  public OnCitySelect(data: any) {
    this.categories = [];
    this.citySelected = data.srcElement.value;
    let i;
    let value;
    for ( i = 0; i < this.length; i++) {
      value = this.essentialData.resources[i];
      if (!this.categories.includes(value.category) && value.city === this.citySelected) {
        this.categories.push(value.category);
      }
    }

  }

  public OnCategorySelect(data: any) {
    this.categorySelected = data.srcElement.value;
  }
}
