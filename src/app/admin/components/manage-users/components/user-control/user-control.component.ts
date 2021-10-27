import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss']
})
export class UserControlComponent implements OnInit {
  
  userList: any[]=[];

  // isStatus = false;

  // handleClickMe(event: any){
  //   console.log(event);
  //   this.isStatus=!this.isStatus;
  //   console.log(this.isStatus)
  // }

  checkStatus(passedValue: any): any{
    if(passedValue==true){
      return true;
    }
    else{
      return false;

    }
  }

  constructor(private userService: UserServicesService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((res: any) => {
      console.log(res);
      this.userList = res;
    });
  }

}
