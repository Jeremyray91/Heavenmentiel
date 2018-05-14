import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CartItem } from './cart-item';
import { Type } from './enum-event';
import { Observable, Subject } from 'rxjs';
import { Evenement } from './event';
import { MenuComponent } from './menu/menu.component';
import { Command } from './command';

@Injectable()
export class CartService {

  myItems : CartItem[] = new Array<CartItem>();
  event : Evenement;

  //Test maj panier sources
  private cartQuantitySource = new Subject<Observable<number>>();

  //Test maj panier stream
  cartQuantityUpdated = this.cartQuantitySource.asObservable();
  
  constructor(private httpClient : HttpClient) {
    if(localStorage.getItem('cart'))
    {
      this.myItems = JSON.parse(localStorage.getItem('cart'));
    }
    else
    {
      this.myItems = new Array<CartItem>();
    }
    this.httpClient = httpClient;
   }

  createCommand(commande:Command){
    return this.httpClient.post<Command>("http://localhost:8082/heavenmentiel/api/commandes",commande);
  }

   addItem(item: CartItem)
   {
    this.myItems.push(item);
    localStorage.setItem('cart', JSON.stringify(this.myItems));
    this.cartQuantitySource.next(this.getCartLength());
   }

   getItems() : Observable<CartItem[]> {
     return Observable.of(this.myItems);
   }

   getCartLength()
   {
     return Observable.of(this.myItems.length);
   }

   itemInCart(event : Evenement) : boolean
   {
    for (let itm of this.myItems)
    {
       if (itm.event.name === event.name)
       {
         return true;
       }
    }
    return false;
   }

   getItemQuantity(name : string) : number
   {
     return this.myItems.find(i => i.event.name == name).quantity;
   }

   updateItemQuantity(name: string, quantity: number)
   {
    this.myItems.find(i => i.event.name === name).quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(this.myItems));
   }

   removeAllItems()
   {
     this.myItems = new Array<CartItem>();
     localStorage.removeItem('cart');
     this.cartQuantitySource.next(this.getCartLength());
     //this.onCartServiceUpdate.emit(this.myItems.length);
   }

   removeItem(item: CartItem)
   {
     let index = this.myItems.indexOf(item);
     if (index > -1)
     {
       this.myItems.splice(index, 1);
       localStorage.setItem('cart', JSON.stringify(this.myItems));
       this.cartQuantitySource.next(this.getCartLength());
       //this.onCartServiceUpdate.emit(this.myItems.length);
     }
   }

}
