import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // constructor(private router: Router, private authService: AuthService){
  // }
  userClaims: any;
  constructor (private router: Router,private authService: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      
      if(localStorage.getItem("authToken")!=null &&  this.authService.getUserClaims().subscribe((data: any) => {
        this.userClaims = data;}))
        return true;
      this.router.navigate(['login'], { queryParams: { returnURL: state.url }});
      return false;
    }
  

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  //     if(this.authService.isAuth()){
  //       return true;
  //     }else{
         
  //       return false;
  //     }
  // }
  
}
