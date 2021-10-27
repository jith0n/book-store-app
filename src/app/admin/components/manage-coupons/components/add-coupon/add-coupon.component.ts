import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CouponService } from '../../services/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss']
})
export class AddCouponComponent implements OnInit {

  isAdded =false;

  addNewCouponForm = new FormGroup({
    couponId : new FormControl('',Validators.required),
    discount : new FormControl('',Validators.required),
    stock : new FormControl('',Validators.required)
  })

  constructor( private couponService : CouponService) { }

  ngOnInit(): void {
  }

  handleAddCoupon():void{
    this.isAdded = false;
    //alert("submitting");
    console.log(this.addNewCouponForm.value);
    this.couponService.addCoupon(this.addNewCouponForm.value)
      .subscribe((res : any) =>{
        console.log(res);
        alert("submitted");
        if(res && res.id==11){
          this.isAdded = true;
        }
      })
  }

}
