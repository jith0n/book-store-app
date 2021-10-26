import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {

  delCoupon :any = null;

  couponList = [{id:"chd", disc:39,stock:39},
  {id:"dhdh",disc:50,stock:34},
  {id:"djjf",disc:45,stock:34},
  {id:"dheoddh",disc:50,stock:34},
  {id:"sjc",disc:50,stock:34}
];

  constructor() { }

  ngOnInit(): void {
  }


  handleDelete(coupon:any){
    console.log(coupon);
    this.delCoupon = {...coupon};
  }

  handleDeleteCouponConfirm(){
    
  }
}
