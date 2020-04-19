import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HelplineComponent } from './helpline/helpline.component';
import { TestCentresComponent } from './test-centres/test-centres.component';
import { ChartsComponent } from './home/charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './home/my-line-chart/my-line-chart.component';
import { NationalityPieComponent } from './home/nationality-pie/nationality-pie.component';
import { GenderIndiaChartComponent } from './home/gender-india-chart/gender-india-chart.component';
import { AgeGenderIndiaComponent } from './home/age-gender-india/age-gender-india.component';
import { SourcesComponent } from './sources/sources.component';
import { FooterComponent } from './footer/footer.component';
import { WorldwideComponent } from './worldwide/worldwide.component';
import { WorldwidebarComponent } from './worldwidebar/worldwidebar.component';
import { DailyindComponent } from './home/dailyind/dailyind.component';
import { NewsTickerComponent } from './home/news-ticker/news-ticker.component';
import { NgbPaginationModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NewsComponent } from './news/news.component';
import { FunzoneComponent } from './funzone/funzone.component';
import { RiddleComponent } from './funzone/riddle/riddle.component';
import { MoviesComponent } from './funzone/movies/movies.component';
import { TestedchartComponent } from './home/testedchart/testedchart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MapComponent } from './home/map/map.component';
import { WorldmapComponent } from './worldwide/worldmap/worldmap.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { AsyncPipe } from '@angular/common';
import { environment } from '../environments/environment';
import { MumbaihComponent } from './mumbaih/mumbaih.component';
import { StatestatsComponent } from './statestats/statestats.component';
import { StatemapComponent } from './home/statemap/statemap.component';
import { MapboxComponent } from './mapbox/mapbox.component';
import { TopdistrictComponent } from './topdistrict/topdistrict.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HelplineComponent,
    TestCentresComponent,
    ChartsComponent,
    MyLineChartComponent,
    NationalityPieComponent,
    GenderIndiaChartComponent,
    AgeGenderIndiaComponent,
    SourcesComponent,
    FooterComponent,
    WorldwideComponent,
    WorldwidebarComponent,
    DailyindComponent,
    NewsTickerComponent,
    NewsComponent,
    FunzoneComponent,
    RiddleComponent,
    MoviesComponent,
    TestedchartComponent,
    MapComponent,
    WorldmapComponent,
    EssentialsComponent,
    MumbaihComponent,
    StatestatsComponent,
    StatemapComponent,
    MapboxComponent,
    TopdistrictComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ChartsModule,
    RouterModule,
    NgbPaginationModule,
    SlickCarouselModule,
    // tslint:disable-next-line: deprecation
    NgbTabsetModule,
    HighchartsChartModule,
    NgbToastModule,
   /*  AngularFireModule.initializeApp(environment.firebase), */
    NgbToastModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})



export class AppModule { }
