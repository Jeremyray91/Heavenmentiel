import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { Type } from './enum-event';
import { Event } from './event';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {

  myItems = new Array<CartItem>();
  event : Event;

  constructor() {
    this.event = new Event(
      "Evenement 1",
      "Toulouse",
      Type.CINEMA,
      new Date('05/06/2018'),
      10,
      10,
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
      true, 
      "assets/img_carousel/slide1.jpg",
      "assets/img_miniature/min1.jpg"
    )

    this.myItems.push(new CartItem(this.event,3));
    this.myItems.push(new CartItem(this.event,1));
    this.myItems.push(new CartItem(this.event,5));
    this.myItems.push(new CartItem(this.event,2));
    this.myItems.push(new CartItem(this.event,2));
   }

   addItem(item: CartItem)
   {
    this.myItems.push(item);
   }

   getItems() : Observable<CartItem[]> {
     return Observable.of(this.myItems);
   }

   itemInCart(event : Event) : boolean
   {
    for (let i in this.myItems)
    {
       if (this.myItems[i][0].name === event.name)
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
   }

   removeAllItems()
   {
     this.myItems = new Array<CartItem>();
   }

   removeItemById(id: number)
   {
     for (let i in this.myItems)
     {
        if (this.myItems[i][0].id === id)
        {
          delete this.myItems[i];
        }
     }
   }

}
