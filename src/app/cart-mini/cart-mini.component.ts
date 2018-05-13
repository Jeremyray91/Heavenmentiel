import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-mini',
  templateUrl: './cart-mini.component.html',
  styleUrls: ['./cart-mini.component.css']
})
export class CartMiniComponent implements OnInit {

  itemsCartLength: Observable<number>;


  @Input()
  cartLength : Observable<number>;
  
  subscription : Subscription;

  constructor(private cartService : CartService) {
    this.subscription = cartService.cartQuantityUpdated.subscribe(
      quantity => this.cartLength = quantity
    );
   }

  ngOnInit() {
    this.cartService.getCartLength().subscribe(length => {
      console.log("update du panier");
      
    });
  }

}
