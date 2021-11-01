import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/components/home/home.component';
import { ListBooksComponent } from './books/components/list-books/list-books.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { ResetPwComponent } from './auth/components/reset-pw/reset-pw.component';
import { CartComponent } from './shopping/components/cart/cart.component';
import { CheckoutComponent } from './shopping/components/checkout/checkout.component';
import { ConfirmationComponent } from './shopping/components/confirmation/confirmation.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { BookCardComponent } from './books/components/book-card/book-card.component';
import { WishlistComponent } from './shopping/components/wishlist/wishlist.component';
import { CartItemComponent } from './shopping/components/cart-item/cart-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { BooksListComponent } from './admin/components/manage-books/components/books-list/books-list.component';

import { CouponsComponent } from './admin/components/manage-coupons/components/coupons/coupons.component';
import { AddCouponComponent } from './admin/components/manage-coupons/components/add-coupon/add-coupon.component';
import { OrdersComponent } from './admin/components/manage-orders/components/orders/orders.component';

import { UserControlComponent } from './admin/components/manage-users/components/user-control/user-control.component';
import { AddBookComponent } from './admin/components/manage-books/components/add-book/add-book.component';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

import { NgMarqueeModule } from 'ng-marquee';
import { AddCategoryComponent } from './admin/components/manage-category/components/add-category/add-category.component';

import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';
import { ForbiddenComponent } from './auth/components/forbidden/forbidden.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListBooksComponent,
    BookDetailsComponent,
    LoginComponent,
    SignupComponent,
    ResetPwComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmationComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BookCardComponent,
    WishlistComponent,
    CartItemComponent,
    BooksListComponent,
    CouponsComponent,
    AddCouponComponent,
    OrdersComponent,
    SearchFilterPipe,
    UserControlComponent,

    AddBookComponent,

    AddCategoryComponent,

 
      SearchFilterPipe,

      ForbiddenComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMarqueeModule
  ],
  providers: [AuthService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
