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
    // this.cartItemService.latestCartItemsList.subscribe((cartItems: any) => {
    //  // console.log(cartItems);
    //   this.cartItemList = cartItems;
    // })

    this.cartItemService.getCart()
      .subscribe((res: any)=>{
        console.log(res);
        
        this.cartItemList=res;
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

}
