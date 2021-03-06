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
import {EventPaginatorComponent} from './event-paginator/event-paginator.component' 
import { CreateEventsComponent } from './create-events/create-events.component';  
import { AccueilComponent } from './accueil/accueil.component';  
import { DatePipe } from './pipes/date.pipe';  
import { DateFrMonthPipe } from './pipes/date-fr-month.pipe';  
import { DateFrMonthEntirePipe } from './pipes/date-fr-month-entire.pipe';  
import { EventNameUpperPipe } from './pipes/event-name-upper.pipe';
import { CommandService } from './command.service';  

//---- PrimeNG Imports ----//  
import { ListboxModule } from 'primeng/listbox';  
import { InputTextareaModule } from 'primeng/inputtextarea';  
import { SliderModule } from 'primeng/slider';  
import { FileUploadModule } from 'primeng/fileupload';  
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
import { MenuItem } from 'primeng/api';  
import { PanelMenuModule } from 'primeng/panelmenu';  
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';  
import { GrowlModule } from 'primeng/growl';  
import { KeyFilterModule } from 'primeng/keyfilter';  
import { MessageModule } from 'primeng/message';  
import { InputMaskModule } from 'primeng/inputmask';  
import { GMapModule } from 'primeng/gmap';  
import { SpinnerModule } from 'primeng/spinner'; 
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table'; 
import { DataTableModule } from 'primeng/datatable';
  
//---- Connexion avec Spring Imports ----//
import { ConnectionService } from './connection.service';  
import { MenuComponent } from './menu/menu.component';  
import { CreateUserComponent } from './create-user/create-user.component';  
import { EventsUserSideComponent } from './events/events-user-side/events-user-side.component';  
import { SearchEventsUserComponent } from './search-events/search-events-user/search-events-user.component';  
import { ConnectionAdminComponent } from './connection-admin/connection-admin.component';  
import { UserService } from './user.service';  
import { EventDetailsComponent } from './event-details/event-details.component';  
import { ProfileComponent } from './profile/profile.component';  
import { CartComponent } from './cart/cart.component'; 
import { CartService } from './cart.service';
import { FooterComponent } from './footer/footer.component';
import { CgvComponent } from './cgv/cgv.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ContactComponent } from './contact/contact.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CommandsComponent } from './commands/commands.component';
import { CartMiniComponent } from './cart-mini/cart-mini.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuardAdminService } from './auth-guard-admin.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { DisplayOrderComponent } from './display-order/display-order.component';
import { ValidationCartComponent } from './validation-cart/validation-cart.component';
 
const appRoutes : Routes = [ 
  {path : '', component : AccueilComponent}, 
  {path : 'SearchEvents', component : SearchEventsComponent}, 
  {path : 'SearchEventsUser', component : SearchEventsUserComponent}, 
  {path : 'Profile', canActivate : [AuthGuardService], component : ProfileComponent}, 
  {path : 'CreateEvents', canActivate : [AuthGuardAdminService], component : CreateEventsComponent}, 
  {path : 'Events', component : EventsComponent}, 
  {path : 'Connection', component : ConnectionComponent}, 
  {path : 'Connection/:type', component : ConnectionComponent}, 
  {path : 'ConnectionAdmin', component : ConnectionAdminComponent}, 
  {path : 'Evenement', component : EventDetailsComponent}, 
  {path : 'Evenement/:id', component : EventDetailsComponent}, 
  {path : 'MonPanier', component : CartDetailsComponent},
  {path : 'CGV', component : CgvComponent}, 
  {path : 'Mentions', component : MentionsLegalesComponent}, 
  {path : 'Contact', component : ContactComponent},
  {path : 'Commands', canActivate : [AuthGuardService], component : CommandsComponent},
  {path : 'MesCommandes', canActivate : [AuthGuardService], component : MyOrdersComponent},
  {path : 'ValiderPanier', canActivate : [AuthGuardService], component : ValidationCartComponent},
  {path : 'DisplayOrder/:id', component : DisplayOrderComponent}
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
    SearchEventsUserComponent, 
    ProfileComponent, 
    CartComponent ,
    CartDetailsComponent,
    FooterComponent,
    CgvComponent,
    MentionsLegalesComponent,
    ContactComponent,
    EventPaginatorComponent,
    CommandsComponent,
    CartMiniComponent,
    MyOrdersComponent,
    DisplayOrderComponent,
    ValidationCartComponent
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
    SpinnerModule, 
    PaginatorModule,
    FileUploadModule,
    TableModule,
    MenubarModule,
    DataTableModule,
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
  providers: [ConnectionService, EventService, EventsComponent, UserService, ConnectionComponent, MenuComponent, 
    CartService,CommandService, AuthGuardService, AuthGuardAdminService], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 