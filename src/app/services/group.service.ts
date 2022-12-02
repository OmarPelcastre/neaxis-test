import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private url = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/omar"
  constructor(private _httpClient: HttpClient) {

  }

  getGroups(): Observable<any>{
    return this._httpClient.get(this.url)
  }
}
