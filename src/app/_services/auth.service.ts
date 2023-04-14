import { TokenService } from './token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginForm, User } from '../interfaces';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends TokenService {
  constructor(private user: UserService, private http: HttpClient) { super() }

  public login(loginForm: LoginForm): Observable<boolean> {
    const data = {
      username: loginForm.email,
      password: loginForm.password,
      grant_type: 'password',
      client_id: environment.CLIENT_NR,
      client_secret: environment.CLIENT_KEY,
      scope: '*'
    }
    return this.http.post(`${environment.OAUTH_URL}/token`, data).pipe(
      map((result: any) => {
        // console.log(result); 
        this.setToken(result.access_token);
        return true;
      }),
      catchError((error) => {
        // console.log(error);
        return of(false);
      })
    )
  }

  public logout = () => this.removeToken();

  public isLoggedIn = () => this.getToken() !== null;

  public async hasPermission(role: number): Promise<boolean> {
    try {
      const user = await this.user.getUser().toPromise();
      if (!user || user === true) return false;
      return user.role_id == role;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }
}