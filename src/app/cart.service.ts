import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Type } from './enum-event';
import { Event } from './event';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  myItems : CartItem[];
  event : Event;

  constructor() {
    if(localStorage.getItem('cart'))
    {
      this.myItems = JSON.parse(localStorage.getItem('cart'));
    }
    else
    {
      this.myItems = new Array<CartItem>();
    }
   }

   addItem(item: CartItem)
   {
    this.myItems.push(item);
    localStorage.setItem('cart', JSON.stringify(this.myItems));
   }

   getItems() : Observable<CartItem[]> {
     return Observable.of(this.myItems);
   }

   itemInCart(event : Event) : boolean
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
   }

   removeItem(item: CartItem)
   {
     let index = this.myItems.indexOf(item);
     if (index > -1)
     {
       this.myItems.splice(index, 1);
       localStorage.setItem('cart', JSON.stringify(this.myItems));
     }
   }

}
