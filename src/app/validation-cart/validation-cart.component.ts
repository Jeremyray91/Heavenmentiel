import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';
import { Message } from 'primeng/components/common/api';
import { Command } from '../command';
import { Achatevent } from '../achatevent';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validation-cart',
  templateUrl: './validation-cart.component.html',
  styleUrls: ['./validation-cart.component.css']
})
export class ValidationCartComponent implements OnInit {

  msgs: Message[] = [];

  items = new Array<CartItem>();
  isEmpty: boolean = true;
  totalPrice : number = 0;

  constructor(private cartService: CartService, private router : Router) { }

  

  ngOnInit() {
    if(localStorage.getItem('FromValidateCart') === "connected")
    {
      this.cartService.getItems().subscribe(items => this.items = items);
      this.checkIsEmpty();
      this.sumPrice();
      localStorage.removeItem('FromValidateCart');
    }
    else
    {
      this.redirect();
    }
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
    console.log("check : " + this.isEmpty);
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

  showSucces() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Confirmation Successful', detail: 'Confirmation submitted' });
  }

  confirmCart()
  {
    let achatEvent : Array<Achatevent> = new Array<Achatevent>();
    for(let ae of this.items){
      achatEvent.push(new Achatevent(ae.event, null, ae.quantity))
      console.log(ae.quantity);
    }
    let userCmd : User = JSON.parse(sessionStorage.getItem('currentUser'));
    let commande = new Command(new Date(), userCmd , achatEvent);
    this.cartService.createCommand(commande).subscribe();
    localStorage.setItem('CommandesUID'+userCmd.id,JSON.stringify(commande));
    this.cartService.removeAllItems();
    this.items = new Array<CartItem>();
    console.log("here");
    this.checkIsEmpty();
  }

  redirect()
  {
    this.router.navigate(['/'])
  }

}
