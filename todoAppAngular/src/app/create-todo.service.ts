import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CreateTodoService {
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getCathegories(): Observable<any> {
    return this.http.get(`${environment.baseUrl}${environment.cathegories}`)
  }

  createTodo(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}${environment.mainItems}`, data, {headers: this.httpHeaders})
  }
}
