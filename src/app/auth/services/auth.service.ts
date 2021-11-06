import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly rootUrl = 'https://localhost:44392'; //api address
  
  constructor(private http: HttpClient,private router: Router) { }

  registerUser(user: User,roles : string[]) {
    const body = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      Roles : roles
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

   roleMatch(allowedRoles: string[]): boolean {
    var isMatch = false;
    //var userRoles: string[] = ['loggedOut'];
    if(localStorage.getItem("userRoles")!=null){
      var userRoles:string[] = JSON.parse(localStorage.getItem("userRoles") || '{}');
      allowedRoles.forEach(element => {
        if (userRoles.indexOf(element) > -1) {
          isMatch = true;
          return false;
        }
        return true;
      });

    } 
    return isMatch;

  }

}
