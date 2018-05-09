import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { Event } from '../event';
import { Type } from '../enum-event';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[];
  event : Event;
  constructor() {}

  ngOnInit() {
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

    this.items.push(new CartItem(this.event,3));
    this.items.push(new CartItem(this.event,1));
    this.items.push(new CartItem(this.event,5));
    this.items.push(new CartItem(this.event,2));
    this.items.push(new CartItem(this.event,2));
  }

}
