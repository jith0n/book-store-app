import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
//Step 1: Have the default card items
  // We will normally load this from REST API
  // but now mocking it with static data
  private defaultCartItems: any[] = [
    {
    id: 3,
    url: "https://via.placeholder.com/600/92c952",
    title: 'sdjfbdfjsilk',
    price:'',
    category:''
    }
  ];

  private defaultWishItems: any[] = [
    {
      id: 3,
      url: "https://via.placeholder.com/600/92c952",
      title: 'sdjfbdfjsilk',
      price:'',
      category:''
    }
  ]

  //Step 2: Create BehaviourSubject with defaultCartItems
  // Lets make this data subscribable
  // inorder to make the above data subscribable, we need to create an Observable with defaultCartitems
 private cartItemslist = new BehaviorSubject(this.defaultCartItems);

 //Step 3: Make the above as Observable so that any comp can subscribe to it.
 latestCartItemsList: Observable<any> = this.cartItemslist.asObservable();
 // the above latestCartItemsList is now subscribable from any comp

 private wishItemslist = new BehaviorSubject(this.defaultWishItems);
 latestWishItemsList: Observable<any> = this.wishItemslist.asObservable();


  constructor() { }

  updateCart(book: any): void{        //must add new book if not exist in cart else increment quantity
    //console.log(book);
    //Let's update the cart items
    this.latestCartItemsList.pipe(take(1)).subscribe((cartItems: any) => {    
      //console.log(cartItems); //Array
      const newCartItemsArr = [...cartItems,book];
     // console.log(newCartItemsArr);
      this.cartItemslist.next(newCartItemsArr);
    });
  }

  removeCart(book: any): void{    //must remove book from cart

  }

  removeWishlist(book:any): void{   //must remove book from wishlist

  }



  updateWishlist(book: any): void{      //must only add once
    this.latestWishItemsList.pipe(take(1)).subscribe((wishItems: any) => {
      const newWishItemsArr = [...wishItems,book];
      this.wishItemslist.next(newWishItemsArr);
    })

  }
}
