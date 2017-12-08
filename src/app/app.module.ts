import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { UserService } from "./services/user.service.client";
import { ScheduleService } from "./services/schedule.service.client";
import { DayService } from "./services/day.service.client";
import { MatchService } from "./services/match.service.client";
import { MessageService } from "./services/message.service.client";
import { LocationService } from "./services/location.service.client";

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SwipeComponent } from './components/swipe/swipe.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ConvoComponent } from './components/convo/convo.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { LocationComponent } from './components/location/location.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    SwipeComponent,
    SettingsComponent,
    MatchesComponent,
    ConvoComponent,
    ScheduleComponent,
    LocationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ UserService, ScheduleService, DayService, MatchService, MessageService, LocationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
