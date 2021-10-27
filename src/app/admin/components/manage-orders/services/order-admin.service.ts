import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderAdminService {

  constructor( private http : HttpClient) { }

  getOrderList():any{
    console.log('inside service');
    return this.http.get ('https://jsonplaceholder.typicode.com/users')
      .pipe(map ((res : any) =>{
        console.log(res);
        return res;
      }))
  }
}
