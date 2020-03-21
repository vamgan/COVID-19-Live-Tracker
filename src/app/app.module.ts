import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
declare var require: any;
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
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
