import { Component, OnInit } from '@angular/core';
import { CartItemsService } from 'src/app/shared/services/cart-items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItemList: any[] = [];
  cartCount:number = 0;
  isDeleted = false;
  cartTotalPrice: number = 0;
  constructor(private cartItemService: CartItemsService) { }

  ngOnInit(): void {

    this.cartItemService.getCart()
      .subscribe((res: any)=>{
        console.log(res);
        for(var item of res){
          this.cartCount=this.cartCount +1;
          
          this.cartTotalPrice = this.cartTotalPrice + item.BookPrice;
        }
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

      removeCart(cartId: number):void{
        this.cartItemService.removeCart(cartId)
        .subscribe( (res: any) => {
          console.log(res);
          if(res){
            this.isDeleted = true;
            window.location = window.location;  //for refresh
            //this.bookList = res;
          }
        });
      }

}
