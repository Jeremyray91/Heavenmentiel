import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../event';
import { Type } from '../enum-event';
import {} from '@types/googlemaps';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  
  event : Event = new Event("",null,null,null,0,0,"",null,false, "", "");
  category : string ;  

  //---- Attributs de la partie commande ----//
  stockStatusMsg : string;
  quantitySelected : number;
  isInCart : boolean;

  //---- Attributs pour module Google Map ----//
  mapOptions : any;
  mapPosition : any;
  mapOverlays : any[];

  constructor(private eventService : EventService, private cartService : CartService, private route : ActivatedRoute, private router: Router) {
    this.eventService = eventService;
    this.cartService = cartService;
  }

  ngOnInit() {
    this.quantitySelected = 0;

    this.mapPosition = {lat: 43.604587, lng: 1.447928};
    this.mapOverlays = 
    [
      new google.maps.Marker({position: this.mapPosition, title:"Cinema Gaumont Wilson"})
    ]

    this.mapOptions = {
      center : this.mapPosition,
      zoom: 18
    };

    /*this.event = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.eventService.getEventById(parseInt(params.get('id')));
        console.log(this.event);
      });
    );*/

    this.eventService.getEventById(parseInt(localStorage.getItem("requestedEvent"))).subscribe(evt => {
      this.event = evt;
      this.checkStockStatus();
      this.checkIsInCart();
      console.log(this.event);
    });
      
    
  }

  checkStockStatus()
  {
    if(this.event.stock > 30)
    {
      this.stockStatusMsg = "En stock"
    }
    else if (this.event.stock > 0)
    {
      this.stockStatusMsg = "Il n'en reste plus que " + this.event.stock + " !"
    }
    else
    {
      this.stockStatusMsg = "Plus disponible"
    }
  }

  checkIsInCart()
  {
    this.isInCart = this.cartService.itemInCart(this.event);
  }

  index: number = 0;

    openNext() {
        this.index = (this.index === 2) ? 0 : this.index + 1;
    }

    openPrev() {
        this.index = (this.index === 0) ? 2 : this.index - 1;
    }

    addToCart()
    {
      console.log("Commande :");
      console.log("Event : " + this.event.name)
      console.log("Quantité : " + this.quantitySelected);
      if(this.quantitySelected > 0)
      {
        if(!this.isInCart)
        {
          this.cartService.addItem(new CartItem(this.event, this.quantitySelected));
        }
        else
        {
          let newQuantity : number = 0;
          let actualQuantity : number = this.cartService.getItemQuantity(this.event.name);
          newQuantity = (actualQuantity + this.quantitySelected <= 30) ? (actualQuantity + this.quantitySelected) : 30
          this.cartService.updateItemQuantity(this.event.name, newQuantity);
        }
      }
      console.log(this.cartService.myItems);
    }

}
