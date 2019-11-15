import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private map = new Map<string, string>();
  constructor(private http: HttpClient) {
  }

  getPage() {
    return this.http.get('./assets/page.json');
  }

  getHome() {
    return this.http.get('./assets/tekstStranice.json');
  }

  getImages() {
    return this.http.get('./assets/images.json')
  }

  getStyle() {
    return this.http.get('./assets/style.json');
  }

  setEmail(email: any) {
    console.log(email);
  }
}
