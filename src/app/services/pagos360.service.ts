import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Pagos360Service {
  authToken: string = environment.apiKey;
  apiPath: string = 'https://api.sandbox.pagos360.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authToken}`,
    }),
  };

  constructor(private http: HttpClient) {}

  getReporteCobranzas(date: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiPath}/report/collection/${date}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
