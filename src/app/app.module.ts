import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { UserService } from "./services/user.service.client";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SwipeComponent } from './components/swipe/swipe.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ConvoComponent } from './components/convo/convo.component';

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
