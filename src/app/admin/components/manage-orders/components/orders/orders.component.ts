import { Component, OnInit } from '@angular/core';
import { OrderAdminService } from '../../services/order-admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderList : any[] = [];

  constructor( private orderService : OrderAdminService) { }

  ngOnInit(): void {
    this.orderService.getOrderList()
      .subscribe ( (res : any) =>{
      console.log(res);
      this.orderList = res;
    })
  }

}
