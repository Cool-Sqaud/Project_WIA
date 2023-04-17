import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  isLoggedIn = false;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { }

  onSubmit(): void {
    if (!this.loginForm.valid) { 
      console.log(this.loginForm.value, 'is invalid');
      return;
    }
    this.auth.login(this.loginForm.value).subscribe(
      (result: any) => {
        if (result) {
          this.auth.refreshLoggedIn();
          this.router.navigate(['/medewerker']);
        }
      }
    )
  }

  test() {
    this.http.get('http://127.0.0.1:8000/api/measurements').subscribe(
      result => console.log(result)
    )
  }
  // test(): void {
  //     const data = {
  //       STN: 719120,
  //       DATE: "2023-04-03", 
  //       TIME: "00:39:38", 
  //       TEMP: -3.6, 
  //       DEWP: -9.0, 
  //       STP: 1002.7, 
  //       SLP: 1021.0,
  //       VISIB: 22.5, 
  //       WDSP: 14.9, 
  //       PRCP: 0.00, 
  //       SNDP: 1.0, 
  //       FRSHTT: "101000", 
  //       CLDC: 50.4, 
  //       WNDDIR: 130
  //     }
  
  //     this.http.post(`${environment.API_URL}/measurement/add`, data).subscribe(
  //       result => {
  //         console.log(result);
  //       }, error => {
  //         console.log(error);
  //       }
  //     )
  //   }
}