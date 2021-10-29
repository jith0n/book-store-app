import { Component, OnInit } from '@angular/core';
import { CartItemsService } from 'src/app/shared/services/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItemList: any[] = [];

  constructor(private cartItemService: CartItemsService) { }

  ngOnInit(): void {
    this.cartItemService.latestCartItemsList.subscribe((cartItems: any) => {
     // console.log(cartItems);
      this.cartItemList = cartItems;
    })

}
}
