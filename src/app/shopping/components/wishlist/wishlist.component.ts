import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemsService } from 'src/app/shared/services/cart-items.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishItemList: any[] = [];

  constructor(private wishItemService: CartItemsService, private updateCartService: CartItemsService
    ,private router : Router, private cartItemService :CartItemsService) { }

  ngOnInit(): void {
    // this.updateCartService.latestWishItemsList.subscribe((cartItems: any) => {
    //   // console.log(cartItems);
    //    this.wishItemList = cartItems;
    //  })
    this.cartItemService.getWishList()
      .subscribe((res: any)=>{
        console.log(res);
        
        this.wishItemList=res;
      });
  }

  isValid(userId: string): any{
    let id = localStorage.getItem("Id");
    console.log(userId);
    if(userId == id){
      return true;
    }
    else{
      return false;
    }
  }

handleAddtoCart(book: any):void{
  const cartModel = {
    BookId:book.BookId,
    userId: localStorage.getItem('Id')
  }
  if(localStorage.getItem("authToken")!=null){
    //this.cartModel.BookId = book.BookId;
    console.log(cartModel);
    this.updateCartService.updateCart(cartModel)
      .subscribe((res: any)=>{
        console.log(res);
      });
  }else{
  this.router.navigate(['login'], { queryParams: { returnURL: '/books' }});
  }
}

}
