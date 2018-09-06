import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { IEmployee} from './employee';
import { Observable, Subject, pipe, of, from, interval, merge, fromEvent, asapScheduler } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(
                    catchError(this.errorHandler));
                    
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "server error!!");
  }




}
