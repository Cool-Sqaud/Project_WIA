import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { LoginForm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm): boolean {
    const data = {
      username: loginForm.email,
      password: loginForm.password,
      grant_type: 'password',
      client_id: env.CLIENT_NR,
      client_secret: env.CLIENT_KEY,
      scope: '*'
    }
    this.http.post(`${env.OAUTH_URL}/token`, data).subscribe(
      result => {
        console.log(result);
        return true;
      },
      error => {
        console.log(error);
        return false;
      }
    )
    return false;
  }
}
