import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { InsightsComponent } from './insights/insights.component';
import { CasesComponent } from './cases/cases.component';
import { FundingComponent } from './funding/funding.component';
import { WorldWideComponent } from './world-wide/world-wide.component';
import { ConfirmedComponent } from './analytics/confirmed/confirmed.component';
import { RecoveredComponent } from './analytics/recovered/recovered.component';
import { SymptomaticComponent } from './analytics/symptomatic/symptomatic.component';
import { InfectionSourcesComponent } from './analytics/infection-sources/infection-sources.component';
import { IntensiveCareComponent } from './analytics/intensive-care/intensive-care.component';
import { CurrentComponent } from './insights/current/current.component';
import { DischargedComponent } from './insights/discharged/discharged.component';
import { NetworkGraphComponent } from './cases/network-graph/network-graph.component';
import { SearchComponent } from './cases/search/search.component';
import { WorldwideComponent } from './worldwide/worldwide.component';
import { HelplineComponent } from './helpline/helpline.component';
import { TestCentresComponent } from './test-centres/test-centres.component';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { NationalityPieComponent } from './nationality-pie/nationality-pie.component';
import { GenderIndiaChartComponent } from './gender-india-chart/gender-india-chart.component';
import { AgeGenderIndiaComponent } from './age-gender-india/age-gender-india.component';
import { SourcesComponent } from './sources/sources.component';
import { NgbModule, NgbNavbar } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AnalyticsComponent,
    InsightsComponent,
    CasesComponent,
    FundingComponent,
    WorldWideComponent,
    ConfirmedComponent,
    RecoveredComponent,
    SymptomaticComponent,
    InfectionSourcesComponent,
    IntensiveCareComponent,
    CurrentComponent,
    DischargedComponent,
    NetworkGraphComponent,
    SearchComponent,
    WorldwideComponent,
    HelplineComponent,
    TestCentresComponent,
    ChartsComponent,
    MyLineChartComponent,
    WorldmapComponent,
    NationalityPieComponent,
    GenderIndiaChartComponent,
    AgeGenderIndiaComponent,
    SourcesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ChartsModule,
    RouterModule,
    NgbModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
