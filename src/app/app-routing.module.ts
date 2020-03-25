import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HelplineComponent} from './helpline/helpline.component';
import { TestCentresComponent } from './test-centres/test-centres.component';
import { SourcesComponent } from './sources/sources.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'helpline', component: HelplineComponent},
  { path: 'testcentre', component: TestCentresComponent},
  { path: 'sources', component: SourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
