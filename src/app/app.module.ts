import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MockComponent } from './components/mock/mock.component';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    MockComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
