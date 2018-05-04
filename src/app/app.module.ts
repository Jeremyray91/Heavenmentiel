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
import { EventService } from './event.service';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {SliderModule} from 'primeng/slider';
import {FileUploadModule} from 'primeng/fileupload';
import { CreateEventsComponent } from './create-events/create-events.component';


const appRoutes : Routes = [
  {path : 'SearchEvents', component : SearchEventsComponent},
  {path : 'Events', component : EventsComponent}
  {path : 'CreateEvents', component : CreateEventsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SearchEventsComponent,
    CreateEventsComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ButtonModule,
    InputSwitchModule,
    HttpClientModule,
    HttpModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    SliderModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
