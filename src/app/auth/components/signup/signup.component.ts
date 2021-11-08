import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User = new User;

  signupForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    uname: new FormControl('',[Validators.required]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    cpwd: new FormControl('', [Validators.required])
  })

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: ''
    }
  }

  handleRegister(form: NgForm) {
    this.authService.registerUser(form.value,["Customer"])
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.router.navigate(['/']);

        }
      });
  }
}
