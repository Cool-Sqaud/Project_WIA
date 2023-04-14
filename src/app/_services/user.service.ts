import { TokenService } from './token.service';
import { environment } from './../../environments/environment.development';
import { User } from './../interfaces';
import { Observable, map, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends TokenService {
  
  constructor(private http: HttpClient) { super(); }

  public getUser(): Observable<User | boolean> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.getToken()}`
    })
    return this.http.get(`${environment.API_URL}/user`, {headers: headers}).pipe(
      map((result: any) => {
        console.log(result);
        return result as User;
      }),
      catchError((error) => {
        // console.error('Error:', error);
        return of(false);
      })
    );
  }
}
