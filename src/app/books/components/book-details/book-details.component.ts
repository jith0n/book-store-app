import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartItemsService } from 'src/app/shared/services/cart-items.service';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  bookData: any;

  constructor(private booksService: BooksService, private route: ActivatedRoute,
    private authService: AuthService, private updateCartService: CartItemsService,
    private router: Router) { }

  ngOnInit(): void {
    console.log("inside ngOnInit");
    let id = this.route.snapshot.paramMap.get("id");
    this.booksService.getBookById(id)
      .subscribe((res: any) => {
        console.log(res);
        this.bookData = res;
      });
  }

  handleAddtoCart(book: any): void {
    if (localStorage.getItem("authToken")!=null) {
      this.updateCartService.updateCart(book);
    } else {
      this.router.navigate(['login'], { queryParams: { returnURL: '/books' } });
    }
  }

  handleAddtoWishList(book: any): void {
    if (localStorage.getItem("authToken")!=null) {
      this.updateCartService.updateWishlist(book);
    } else {
      this.router.navigate(['login'], { queryParams: { returnURL: '/books' } });
    }
  }
}
