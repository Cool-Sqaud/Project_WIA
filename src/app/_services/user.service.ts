import { TokenService } from './token.service';
import { environment } from './../../environments/environment.development';
import { User } from './../interfaces';
import { Observable, map, catchError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends TokenService {
  currentUser = this.getCurrentUser()
  
  constructor(
    private http: HttpClient
  ) { super(); }

  public getCurrentUser(): Observable<User | boolean> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    })
    return this.http.get(`${environment.API_URL}/user`, {headers: headers}).pipe(
      map((result: any) => {
        // console.log(result);
        return result as User;
      }),
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) this.removeToken();
        }
        // console.error('Error:', err);
        return of(false);
      })
    );
  }
}
