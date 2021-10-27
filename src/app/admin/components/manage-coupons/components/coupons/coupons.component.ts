import { Component, OnInit } from '@angular/core';
import { CouponService } from '../../services/coupon.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  delCoupon :any = null;
  isDeleted = false;
  couponList:any[] = [];

  constructor( private couponService : CouponService) { }

  ngOnInit(): void {
    this.couponService.getCoupons()
    .subscribe ( (res : any) =>{
      console.log(res);
      this.couponList = res;
    })
  }


  handleDelete(coupon:any){
    this.isDeleted = false;
    console.log(coupon);
    this.delCoupon = coupon;
  }

  handleDeleteCouponConfirm(){
    console.log(this.delCoupon);
    this.couponService.deleteCoupon(this.delCoupon.id)
      .subscribe((res : any) =>{
        console.log(res);
        if (res){
          this.isDeleted = true;
          //alert("deleted");
        }
      })
  }
}
