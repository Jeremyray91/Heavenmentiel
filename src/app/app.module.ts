import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { SearchEventsComponent } from './search-events/search-events.component';
import { FormsModule } from '@angular/forms';
import { ConnectionComponent } from './connection/connection.component';
import {CalendarModule} from 'primeng/calendar';
import { EventService } from './event.service';
import { HttpModule } from '@angular/http';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SliderModule} from 'primeng/slider';
import {FileUploadModule} from 'primeng/fileupload';
import { CreateEventsComponent } from './create-events/create-events.component';

//---- PrimeNG Imports ----//
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccordionModule } from 'primeng/accordion';

//---- Connexion avec Spring Imports ----//
import { HttpClientModule } from '@angular/common/http'
import { ConnectionService } from './connection.service';
import { MenuComponent } from './menu/menu.component';

const appRoutes : Routes = [
  {path : 'SearchEvents', component : SearchEventsComponent},
  {path : 'CreateEvents', component : CreateEventsComponent}
  {path : 'Events', component : EventsComponent},
  {path : 'Connection', component : ConnectionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    CreateEventsComponent
    SearchEventsComponent,
    ConnectionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    //---- PrimeNG Modules ----//
    TabViewModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
    PanelMenuModule,
    AccordionModule,

    //---- Connexion avec Spring ----//
    HttpClientModule,
    InputSwitchModule,
    HttpModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule,
    SliderModule
  ],
  providers: [ConnectionService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
