import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartItemsService } from 'src/app/shared/services/cart-items.service';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
  
  bookList: any[]=[]; 

 
  
  constructor(private booksService: BooksService, private updateCartService: CartItemsService,
              private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    console.log("inside ngonit");
    this.booksService.getBooks()
      .subscribe((res: any)=>{
        console.log(res);
        this.bookList=res;
      });
  }

  handleAddtoCart(book: any):void{
    const cartModel = {
      BookId:book.BookId,
      userId: localStorage.getItem('Id')
    }
    if(localStorage.getItem("authToken")!=null && this.authService.roleMatch(["Customer"])){
      //this.cartModel.BookId = book.BookId;
      console.log(cartModel);
      this.updateCartService.updateCart(cartModel)
        .subscribe((res: any)=>{
          console.log(res);
        });
    }
    else if(localStorage.getItem("authToken")!=null && this.authService.roleMatch(["Admin"])){
      //just put toast
    }
    else{
    this.router.navigate(['login'], { queryParams: { returnURL: '/books' }});
    }
  }

  handleAddtoWishList(book: any): void{
    const wishListModel = {
      booksid:book.BookId,
      userId: localStorage.getItem('Id')
    }
    if(localStorage.getItem("authToken")!=null && this.authService.roleMatch(["Customer"])){
      console.log(wishListModel);
      this.updateCartService.updateWishlist(wishListModel)
        .subscribe((res: any)=>{
          console.log(res);
        });
    }
    else if(localStorage.getItem("authToken")!=null && this.authService.roleMatch(["Admin"])){
      //just put toast
    }else{
      this.router.navigate(['login'], { queryParams: { returnURL: '/books' }});
    }

  }

}
