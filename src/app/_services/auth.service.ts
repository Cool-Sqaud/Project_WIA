import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(loginForm: LoginForm) {
    console.log(loginForm);
  }
}
