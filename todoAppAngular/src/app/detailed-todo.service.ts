import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DetailedTodoService {
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(
    private http: HttpClient
  ) { }

  getTodo(id): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/v1.0/parent/${id}`)
  }

  submit(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}${environment.childItems}`, data, {headers: this.httpHeaders})
  }

  delete(id, service): Observable<any> {
    var option = ""
    if (service == "father") {
      option = environment.mainItems
    } else if (service == "child") {
      option = environment.childItems
    }
    console.log()
    return this.http.delete(`${environment.baseUrl}${option}${id}/`)
  }
}
