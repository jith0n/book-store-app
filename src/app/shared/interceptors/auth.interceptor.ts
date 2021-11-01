import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  userClaims:any;
  constructor(private router: Router,private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("inside interceptor");
    if(request.headers.get('No-Auth')=="True")
      return next.handle(request.clone());

    if(localStorage.getItem("authToken")!=null){
      const clonedRequest = request.clone({
        headers: request.headers.set("Authorization","Bearer "+localStorage.getItem("authToken"))
      });
      // this.authService.getUserClaims().subscribe((data: any) => {
      //   this.userClaims = data;});
      //   if(this.userClaims!=null){
      //   localStorage.setItem("Id",this.userClaims.Id);}

        return next.handle(clonedRequest).pipe(
          tap(
            data => {},
            error => {
              if (error.status === 401)
              {console.log("err401");
                this.router.navigateByUrl('/login');
              }
              else if (error.status === 403){
                console.log("err401");
                this.router.navigateByUrl('/forbidden');
              }
            }
          ),
          finalize(() => {
          })
        );

    }
    else{
      this.router.navigateByUrl("/login");
    }




    //console.log(request);
    // // access the token from the storage
    // const bearerToken = localStorage.getItem('authToken');

    // console.log(bearerToken);
    // // clone the req, in order to modify req header
    // request = request.clone({ // and then, inside the cloned req, attach the token
    //   setHeaders: {
    //     Authorization: 'Bearer ' + bearerToken
    //   }
    // });

    console.log(request);
    return next.handle(request);
  }
}
