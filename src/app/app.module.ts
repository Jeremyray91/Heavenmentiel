import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SearchEventsComponent } from './search-events/search-events.component';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputSwitchModule} from 'primeng/inputswitch';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';


const appRoutes : Routes = [
  {path : 'SearchEvents', component : SearchEventsComponent},
  {path : 'Events', component : EventsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SearchEventsComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ButtonModule,
    InputSwitchModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
