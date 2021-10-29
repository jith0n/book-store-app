import { Component, OnInit } from '@angular/core';
import { CartItemsService } from 'src/app/shared/services/cart-items.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishItemList: any[] = [];

  constructor(private wishItemService: CartItemsService, private updateCartService: CartItemsService) { }

  ngOnInit(): void {
    this.updateCartService.latestWishItemsList.subscribe((cartItems: any) => {
      // console.log(cartItems);
       this.wishItemList = cartItems;
     })

}

handleAddtoCart(book: any): void{
  this.updateCartService.updateCart(book);
}

}
