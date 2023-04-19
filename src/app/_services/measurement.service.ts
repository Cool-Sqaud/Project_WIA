import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(
    private http: HttpClient
  ) { }

  public getStationMeasurements(id: string) {
    return this.http.get(`${environment.API_URL}/measurement/${id}`).pipe(
      map(result => result),
      catchError(() => {
        return of(false);
      })
    );
  }

  public getAllMeasurements() {
    return this.http.get(`${environment.API_URL}/measurements/all`).pipe(
      map(result => result),
      catchError(() => {
        return of(false);
      })
    );
  }

  public getMeasurements() {
    return this.http.get(`${environment.API_URL}/measurements`).pipe(
      map(result => result),
      catchError(() => {
        return of(false);
      })
    );
  }

  public getAllStations() {
    return this.http.get(`${environment.API_URL}/stations`).pipe(
      map(result => result),
      catchError(() => {
        return of(false);
      })
    );
  }
}