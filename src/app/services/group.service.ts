import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private url = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/omar_pelcastre"
  private groupEmployeesUrl = 
  "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/omar_pelcastre/getByGroup?id="
  constructor(private _httpClient: HttpClient) {

  }

  getGroups(): Observable<any>{
    return this._httpClient.get(this.url)
  }

  getEmployeesByGroup(id: number):Observable<any>{
    return this._httpClient.get(this.groupEmployeesUrl + id)
  }
}
