import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OneServiceService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('http://localhost:8080/api/nesto')
  }
}
