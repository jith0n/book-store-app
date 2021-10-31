import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootUrl = 'https://localhost:44325'; //api address
  
  constructor(private http: HttpClient,private router: Router) { }

// login(formData: any): any{
//   console.log(formData);

//   return this.http.post('https://reqres.in/api/login', formData)
//   .pipe(map((res: any)=>{
//     console.log(res);
//     return res;
//   }));
// }

//   isAuth(){
//     if(localStorage.getItem('authToken')){
//       return true;
//     }else{
//       return false;
//     }
//   }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/User/Register', body,{headers : reqHeader});
  }

  userAuthentication(userName: string, password: string) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
    return  this.http.get(this.rootUrl+'/api/GetUserClaims');
   }

   Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
