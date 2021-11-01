import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCouponComponent } from './admin/components/manage-coupons/components/add-coupon/add-coupon.component';
import { CouponsComponent } from './admin/components/manage-coupons/components/coupons/coupons.component';
import { OrdersComponent } from './admin/components/manage-orders/components/orders/orders.component';
import { UserControlComponent } from './admin/components/manage-users/components/user-control/user-control.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPwComponent } from './auth/components/reset-pw/reset-pw.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { ListBooksComponent } from './books/components/list-books/list-books.component';
import { HomeComponent } from './home/components/home/home.component';
import { CartComponent } from './shopping/components/cart/cart.component';
import { CheckoutComponent } from './shopping/components/checkout/checkout.component';
import { ConfirmationComponent } from './shopping/components/confirmation/confirmation.component';
import { WishlistComponent } from './shopping/components/wishlist/wishlist.component';
import { BooksListComponent } from './admin/components/manage-books/components/books-list/books-list.component';
import { AddBookComponent } from './admin/components/manage-books/components/add-book/add-book.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ForbiddenComponent } from './auth/components/forbidden/forbidden.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: ListBooksComponent },
  {
    path: 'cart', component: CartComponent,
    canActivate: [AuthGuard], data: { roles: ['Customer'] }
  },
  {
    path: 'forbidden', component: ForbiddenComponent
  },
  {
    path: 'checkout', component: CheckoutComponent,
    canActivate: [AuthGuard], data: { roles: ['Customer'] }
  },
  { path: 'confirm', component: ConfirmationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPwComponent },
  {
    path: 'wishlist', component: WishlistComponent,
    canActivate: [AuthGuard], data: { roles: ['Customer'] }
  },

  { path: 'books/:id', component: BookDetailsComponent },
  {
    path: 'admin/user-control', component: UserControlComponent,
    canActivate: [AuthGuard], data: { roles: ['Admin']}
  },

  {
    path: 'admin/books', component: BooksListComponent,
    canActivate: [AuthGuard], data: { roles: ['Admin'] }
  },
  {
    path: 'admin/books/add', component: AddBookComponent,
    canActivate: [AuthGuard], data: { roles: ['Admin'] }
  },

  {
    path: 'admin/coupons', component: CouponsComponent,
    canActivate: [AuthGuard], data: { roles: ['Admin'] }
  },
  {
    path: 'admin/coupons/add', component: AddCouponComponent,
    canActivate: [AuthGuard], data: { roles: ['Admin'] }
  },
  {
    path: 'admin/orders', component: OrdersComponent,
    canActivate: [AuthGuard], data: { roles: ['Admin'] }
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
