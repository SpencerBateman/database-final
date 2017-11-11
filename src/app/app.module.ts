import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { UserService } from "./services/user.service.client";
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    ProfileComponent,
    RegisterComponent,
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
