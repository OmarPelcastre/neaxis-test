import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url: string = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/omar_pelcastre"

  private post_url: string = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/omar_pelcastre"
  constructor(private _httpClient: HttpClient ) { }

  getAllEmployees(): Observable<any>{
    return this._httpClient.get(this.url)
  }

  createEmployee(employee: Employee): Observable<any>{
    return this._httpClient.post(this.post_url, employee)
  }
}
