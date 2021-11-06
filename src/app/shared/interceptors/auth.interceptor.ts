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
        

        return next.handle(clonedRequest).pipe(
          tap(
            data => {},
            error => {
              if (error.status === 401)
              {console.log("err401");
                this.router.navigateByUrl('/login');
              }
              else if (error.status === 403){
                console.log("err403");
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

    console.log(request);
    return next.handle(request);
  }
}
