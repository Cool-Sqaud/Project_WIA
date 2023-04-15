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

  public logout = () => {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    })
    this.removeToken();
    this.isLoggedIn = false;
    this.http.get(`${environment.API_URL}/user/logout`, {headers: headers}).pipe(
      map((result: any) => {
        console.log(result);
        return true;
      }),
      catchError(err => {
        // if (err instanceof HttpErrorResponse) {
        //   if (err.status === 401) this.removeToken();
        // }
        // console.error('Error:', error);
        return of(false);
      })
    );
  }

  public isLoggedIn: boolean = this.getToken() !== null;

  public refreshLoggedIn = (): boolean => this.isLoggedIn = this.getToken() !== null;

  public async hasPermission(role: number): Promise<boolean> {
    try {
      const user = await this.user.currentUser.toPromise();
      if (!user || user === true) return false;
      return user.role_id ? user.role_id >= role : false;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  }

  public async getPermission(): Promise<number> {
    try {
      const user = await this.user.currentUser.toPromise();
      if (!user || user === true || !user.role_id) return 0;
      return user.role_id;
    } catch (error) {
      console.error('Error:', error);
      return 0;
    }
  }
}