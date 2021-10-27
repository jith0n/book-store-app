import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http : HttpClient) { }

  getCoupons():any{
    console.log('inside service');
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe( map( (res :any) => {
        console.log(res);
        return res;
      }));
  }

  addCoupon(coupon :any):any{
    console.log('inside service');
    let couponURL = `https://jsonplaceholder.typicode.com/users`;
    return this.http.post(couponURL, coupon)
      .pipe(map((res : any) =>{
        console.log(res);
        return res;
      }));
  }

  deleteCoupon(id :any):any{
    console.log('inside service');
    console.log(id);
    let deleteCouponURL = `https://jsonplaceholder.typicode.com/users/${id}`
    return this.http.delete(deleteCouponURL)
      .pipe (map ((res : any) =>{
        console.log(res);
        return res;
      }))
  }
}
