import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { Evenement } from '../event';
import { Type } from '../enum-event';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = new Array<CartItem>();
  isEmpty: boolean = true;
  
  constructor(private cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit() {
    this.cartService.getItems().subscribe(items => this.items = items);
    if(this.items.length > 0)
    {
      this.isEmpty = false;
    }
    else
    {
      this.isEmpty = true;
    }
  }

  deleteItem(item: CartItem)
  {
    this.cartService.removeItem(item);
  }

}
