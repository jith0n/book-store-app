import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;

  loginForm = new FormGroup({
    uname: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)])
  })

  userClaims: any;


  constructor(private authService: AuthService, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
  handleLogin(userName: string, password: string): void{
    
    this.authService.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem('authToken',data.access_token);
      localStorage.setItem('userRoles',data.role);
      localStorage.setItem("Id",data.Id);
      
      this.router.navigateByUrl(this.activatedRoute.snapshot.queryParams['returnURL']);
    },
    (err: HttpErrorResponse)=>{
      this.isLoginError = true;
    });
    
  }

}
