import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart-item';
import { Evenement } from '../event';
import { Type } from '../enum-event';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  items = new Array<CartItem>();
  isEmpty: boolean = true;
  totalPrice : number = 0;
  
  constructor(private cartService: CartService, private router: Router, private connectionService: ConnectionService) {
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

  validateCart()
  {
    if (this.connectionService.isAuthenticated())
    {
      localStorage.setItem('FromValidateCart', "connected");
      this.router.navigate(['/ValiderPanier']);
    }
    else
    {
      localStorage.setItem('FromValidateCart', "notConnected");
      this.router.navigate(['/Connection']);
    }    
  }
}
