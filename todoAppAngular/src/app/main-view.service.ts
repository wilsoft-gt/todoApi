import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainViewService {

  constructor(private http: HttpClient) { }

  get_data(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/v1.0/parent/")
  }
}
