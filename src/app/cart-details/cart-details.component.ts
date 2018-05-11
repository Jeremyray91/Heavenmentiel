import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { Event } from '../event';
import { Type } from '../enum-event';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  items = new Array<CartItem>();
  isEmpty: boolean = true;
  totalPrice : number = 0;
  
  constructor(private cartService: CartService) {
    this.cartService = cartService;
  }

  ngOnInit() {
    this.cartService.getItems().subscribe(items => this.items = items);
    this.checkIsEmpty();
    this.sumPrice();
  }


  updateItem(item: CartItem, quantity:number)
  {
    this.cartService.updateItemQuantity(item.event.name, quantity);
    this.sumPrice();
  }

  deleteItem(item: CartItem)
  {
    this.cartService.removeItem(item);
    this.checkIsEmpty();
    this.sumPrice();
  }

  checkIsEmpty()
  {
    if(this.items.length > 0)
    {
      this.isEmpty = false;
    }
    else
    {
      this.isEmpty = true;
    }
  }

  sumPrice()
  {
    this.totalPrice = 0;
    if(this.items.length > 0)
    {
      for(let itm of this.items)
      {
        this.totalPrice += itm.event.price * itm.quantity;
      }
    }
  }
}
