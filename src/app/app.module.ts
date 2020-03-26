import {BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule}from './app-routing.module';
import {AppComponent}from './app.component';
import {DeelnemersComponent}from './deelnemers/deelnemers.component';
import { DeelnemerDetailsComponent } from './deelnemer-details/deelnemer-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
declarations: [
AppComponent,
DeelnemersComponent,
DeelnemerDetailsComponent,
DashboardComponent
],
imports: [
BrowserModule,
AppRoutingModule,
FormsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {

}
