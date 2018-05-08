import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'; 
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventService } from './event.service';
import { SearchEventsComponent } from './search-events/search-events.component';
import { ConnectionComponent } from './connection/connection.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {SliderModule} from 'primeng/slider';
import {FileUploadModule} from 'primeng/fileupload';
import { CreateEventsComponent } from './create-events/create-events.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DatePipe } from './pipes/date.pipe';
import { DateFrMonthPipe } from './pipes/date-fr-month.pipe';
import { DateFrMonthEntirePipe } from './pipes/date-fr-month-entire.pipe';
import { EventNameUpperPipe } from './pipes/event-name-upper.pipe';
import {ListboxModule} from 'primeng/listbox';

//---- PrimeNG Imports ----//
import { DataGridModule } from 'primeng/datagrid';
import { PanelModule } from 'primeng/panel';
import { CarouselModule } from 'primeng/carousel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccordionModule } from 'primeng/accordion';
import { GrowlModule } from 'primeng/growl';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessageModule } from 'primeng/message';
import { InputMaskModule } from 'primeng/inputmask';
import { GMapModule } from 'primeng/gmap';

//---- Connexion avec Spring Imports ----//
import { ConnectionService } from './connection.service';
import { MenuComponent } from './menu/menu.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EventsUserSideComponent } from './events/events-user-side/events-user-side.component';
import { SearchEventsUserComponent } from './search-events/search-events-user/search-events-user.component';
import { ConnectionAdminComponent } from './connection-admin/connection-admin.component';
import { UserService } from './user.service';
import { EventDetailsComponent } from './event-details/event-details.component';

const appRoutes : Routes = [
  {path : '', component : AccueilComponent},
  {path : 'SearchEvents', component : SearchEventsComponent},
  {path : 'SearchEventsUser', component : SearchEventsUserComponent},
  {path : 'CreateEvents', component : CreateEventsComponent},
  {path : 'Events', component : EventsComponent},
  {path : 'Connection', component : ConnectionComponent},
  {path : 'ConnectionAdmin', component : ConnectionAdminComponent},
  {path : 'Evenements', component : EventDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AccueilComponent,
    DatePipe,
    DateFrMonthPipe,
    DateFrMonthEntirePipe,
    EventNameUpperPipe,
    SearchEventsComponent,
    ConnectionComponent,
    MenuComponent,
    CreateEventsComponent,
    CreateUserComponent,
    ConnectionAdminComponent,
    EventDetailsComponent,
    CreateUserComponent,
    EventsUserSideComponent,
    SearchEventsUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    /* PrimeNG */
    TabViewModule,
    CardModule,
    PasswordModule,
    ButtonModule,
    MenuModule,
    PanelMenuModule,
    AccordionModule,
    GrowlModule,
    KeyFilterModule,
    MessageModule,
    InputMaskModule,
    GMapModule,

    ListboxModule,
    //---- Connexion avec Spring ----//
    HttpClientModule,
    InputSwitchModule,
    HttpModule,
    InputTextareaModule,
    InputTextModule,
    SliderModule,
    CalendarModule,
    DataGridModule,
    PanelModule,
    CarouselModule
  ],
  providers: [ConnectionService, EventService, EventsComponent, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
