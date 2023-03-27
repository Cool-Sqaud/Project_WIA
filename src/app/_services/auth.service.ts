import { Injectable } from '@angular/core';
import { LoginForm } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(loginForm: LoginForm): boolean {
    console.log(loginForm);
    // if logged in succesfully
    if (1) return true;
    // if failed to authenticate
    return false;
  }
}
