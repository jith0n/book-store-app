import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss']
})
export class AddCouponComponent implements OnInit {

  isAdded =false;

  addNewCouponForm = new FormGroup({
    couponId : new FormControl('NEW50',Validators.required),
    discount : new FormControl('50',Validators.required),
    stock : new FormControl('5',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  handleAddCoupon():void{
    alert("submitting");
    console.log(this.addNewCouponForm.value);
  }

}
