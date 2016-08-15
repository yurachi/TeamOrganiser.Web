import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }  from './components/app/app.component';
import { routing }        from './routing/app.routing';
import { DailyPlanEntryService } from './services/dailyplanentry/dailyplanentry.service';
import { ConfigService } from './services/config/config.service';
import {TeamPlanComponent } from './components/teamplan/teamplan.component';

@NgModule({
  imports:      [ 
  		BrowserModule,
  		FormsModule,
  		routing,
  		HttpModule,
	],

  declarations: [ 
  	AppComponent,
    TeamPlanComponent,
  ],

  providers: [
  	DailyPlanEntryService,
    ConfigService,
  ],

  bootstrap:    [
    AppComponent, 
  ]
})
export class AppModule { }
