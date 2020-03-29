import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-riddle',
  templateUrl: './riddle.component.html',
  styleUrls: ['./riddle.component.css']
})
export class RiddleComponent implements OnInit {
  showAnswer = false;
  showAnswerText = 'Show Answer';
  hideAnswerText = 'Hide Answer';
  riddleData: any;
  page = 1;
  pageSize = 10;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.gocovid19.in/data.json')
    .subscribe(data => this.riddleData = data);
  }

}
