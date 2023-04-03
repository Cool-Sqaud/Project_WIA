import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../_services/auth.service';
// import { environment } from 'src/environments/environment.development';

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

  constructor(private authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
      //Check if logged in already
  };

  onSubmit(): void {
    if (!this.loginForm.valid) { 
      console.log(this.loginForm.value, 'is invalid');
      return;
    }
    if (this.authService.login(this.loginForm.value)) {
      window.location.assign('http://medewerker.localhost:4200/');
    }
  }

  // test(): void {
  //   const data = {
  //     STN: 719120,
  //     DATE: "2023-04-03", 
  //     TIME: "00:39:38", 
  //     TEMP: -3.6, 
  //     DEWP: -9.0, 
  //     STP: 1002.7, 
  //     SLP: 1021.0,
  //     VISIB: 22.5, 
  //     WDSP: 14.9, 
  //     PRCP: 0.00, 
  //     SNDP: 1.0, 
  //     FRSHTT: "101000", 
  //     CLDC: 50.4, 
  //     WNDDIR: 130
  //   }

  //   this.http.post(`${environment.API_URL}/api/measurement/add`, data).subscribe(
  //     result => {
  //       console.log(result);
  //     }, error => {
  //       console.log(error);
  //     }
  //   )
  // }
}
