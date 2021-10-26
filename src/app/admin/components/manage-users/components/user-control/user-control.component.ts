import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {

  isStatus = false;

  handleClickMe(event: any){
    console.log(event);
    this.isStatus=!this.isStatus;
    console.log(this.isStatus)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
