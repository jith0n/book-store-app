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

  handleAddtoCart(book: any): void{
    if(this.authService.isAuth()){
      this.updateCartService.updateCart(book);
    }else{
    this.router.navigate(['login'], { queryParams: { returnURL: '/books' }});
    }
  }

  handleAddtoWishList(book: any): void{
    if(this.authService.isAuth()){
      this.updateCartService.updateWishlist(book);
    }else{
      this.router.navigate(['login'], { queryParams: { returnURL: '/books' }});
    }

  }

}
