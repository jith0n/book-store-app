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
  
  constructor (private router: Router,private authService: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      console.log("inside gaurd");
      if(localStorage.getItem("authToken")!=null){

            
            let roles = next.data["roles"] as Array<string>;
            if (roles) {
              var match = this.authService.roleMatch(roles);
              if (match) return true;
              else {
                this.router.navigate(['/forbidden']);
                return false;
              }
            }
            else
            return true;
          //}
        }
      this.router.navigate(['login'], { queryParams: { returnURL: state.url }});
      return false;
    }
  


  
}
