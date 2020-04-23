import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HelplineComponent} from './helpline/helpline.component';
import { TestCentresComponent } from './test-centres/test-centres.component';
import { SourcesComponent } from './sources/sources.component';
import {WorldwideComponent} from './worldwide/worldwide.component';
import { NewsComponent } from './news/news.component';
import { FunzoneComponent } from './funzone/funzone.component';
import { MumbaihComponent } from './mumbaih/mumbaih.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { StatestatsComponent } from './statestats/statestats.component';
import { HometabComponent } from './hometab/hometab.component';


const routes: Routes = [
  { path: '', redirectTo: '/hometab', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'helpline', component: HelplineComponent},
  { path: 'testcentre', component: TestCentresComponent},
  { path: 'sources', component: SourcesComponent},
  { path: 'worldwide', component: WorldwideComponent},
  { path: 'news', component: NewsComponent},
  { path: 'funzone', component: FunzoneComponent},
  { path: 'mumbaih', component: MumbaihComponent},
  { path: 'essentials', component: EssentialsComponent},
  { path: 'state', component: StatestatsComponent },
  { path: 'hometab', component: HometabComponent},
  { path: '**', redirectTo: '/hometab'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
