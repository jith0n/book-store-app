import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userClaims: any;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    if(localStorage.getItem('authToken')!=null)
      return false;
    else
      return true;
  }

  Logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  isAdmin(){
    if(this.authService.roleMatch(["Admin"]))
      return true;
    else
      return false
  }
}
