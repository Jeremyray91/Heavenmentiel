import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { ConnectionComponent } from '../connection/connection.component';
import { MenuItem } from 'primeng/api';
import { AccueilComponent } from '../accueil/accueil.component';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User;
  userName: string;
  userRole: string;
  userConnected: boolean = true;
  onConnection: boolean = true;
  index: number = 1;
  itemsBurger: MenuItem[];
  items: MenuItem[];

  cartQuantity : Observable<number>;

  //Test maj panier
  testCartQuantity : number = 0;

  constructor(private connectionService: ConnectionService, private router: Router, private cartService : CartService) {
    this.connectionService = connectionService;
    this.router = router;
    //this.cartService.cartQuantityUpdated.subscribe(quantity => this.testCartQuantity = quantity);
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('currentUser'));
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(sessionStorage.getItem('currentUser'));
      console.log("JSON parse");
    }
    //menu burger
    this.itemsBurger = [
      { label: 'Accueil', icon: 'fa-home', routerLink: ['/'] },
      { label: 'Listes événements', icon: 'fa-plus', routerLink: ['/SearchEvents'] },
      { label: 'Ajouter un événement', icon: 'fa-download', routerLink: ['/CreateEvents'] },
      { label: 'Profile', icon: 'fa-refresh', routerLink: ['/Profile'] },
      { label: 'Connection', icon: 'fa-refresh', routerLink: ['/Connection'] }
    ];
    //menu non-burger
    if(this.user){
    this.items = [
      {
        label: 'Bienvenue ' + this.user.firstName,
        items: [
          { label: 'Mon compte', routerLink: ['/Profile'] },
          { label: 'Mes commandes', routerLink: ['/MesCommandes'] }
        ]
      }];}

    console.log(this.connectionService);
    console.log("Connection Service userIsConnected : " + this.connectionService.userIsConnected);
    console.log("MenuComponent - UserIsConnected : " + this.connectionService.userIsConnected);
    //console.log(this.connectionService.getStatus().subscribe(isConnected => this.userConnected = isConnected));
    //this.connectionService.getStatus().subscribe(isConnected => this.userConnected = isConnected);

    //Panier
    this.cartQuantity = this.cartService.getCartLength();
  }

  redirect(direction: string) {
    console.log(direction);
    if (direction == "inscription") {
      this.onConnection = false;
      this.router.navigate(['/Connection']);
      console.log("OnConnection : " + this.onConnection);
    }
    else {
      this.onConnection = true;
      this.router.navigate(['/Connection']);
      console.log("OnConnection : " + this.onConnection);
    }
  }

  disconnect() {
    this.connectionService.disconnect().subscribe();
    sessionStorage.clear();
    this.ngOnInit();
  }

  updateCartMenuQuantity(quantity)
  {
    this.cartQuantity = quantity;
    console.log("Menu quantity updated");
  }
}