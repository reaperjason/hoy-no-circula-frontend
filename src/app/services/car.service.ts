import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { CheckPlateDto, CreateCarDto } from '../models/interfaces/car-dto.interface';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = environment.urlBase;

  constructor(
    private http: HttpClient
  ) { }


  createCar(newCar: CreateCarDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/car`, newCar)
      .pipe(catchError(this.handleError));
  }

  checkCirculationByPlate(car: CheckPlateDto): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/car/plate`, car)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    //acciones segun el tipo de error
    return throwError(() => new HttpErrorResponse({ error }));
  }
}
