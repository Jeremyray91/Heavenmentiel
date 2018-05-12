import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-mini',
  templateUrl: './cart-mini.component.html',
  styleUrls: ['./cart-mini.component.css']
})
export class CartMiniComponent implements OnInit {

  myItems : CartItem[]
  cartService : CartService;

  @Input()
  cartLength: number = 0;

  @Output()
  onCartServiceUpdate = new EventEmitter<number>();

  constructor(cartService : CartService) {
    this.cartService = cartService;
   }

  ngOnInit() {
    this.myItems = this.cartService.myItems;
  }

  addItemCart(){
    this.cartLength++;
    this.onCartServiceUpdate.emit(this.cartLength);
  }

}
