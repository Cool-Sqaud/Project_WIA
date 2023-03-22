import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      //Check if logged in already
  };

  onSubmit(): void {
    if (!this.loginForm.valid) { 
      console.log(this.loginForm.value, 'is invalid');
      return;
    }
    this.authService.login(this.loginForm.value);
  }
}
