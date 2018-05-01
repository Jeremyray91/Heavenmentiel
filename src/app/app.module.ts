import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SearchEventsComponent } from './search-events/search-events.component';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
