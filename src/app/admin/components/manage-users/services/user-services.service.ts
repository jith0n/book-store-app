import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { 
}

getUsers(): any{
  return this.http.get('https://localhost:44392/api/user')
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
}

}
