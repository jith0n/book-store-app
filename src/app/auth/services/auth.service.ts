import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

login(formData: any): any{
  console.log(formData);

  return this.http.post('https://reqres.in/api/login', formData)
  .pipe(map((res: any)=>{
    console.log(res);
    return res;
  }));
}

  isAuth(){
    if(localStorage.getItem('authToken')){
      return true;
    }else{
      return false;
    }
  }
}
