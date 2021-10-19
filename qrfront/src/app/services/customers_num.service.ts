import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cus_num } from '../models/cus.num';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

//대기 순번
@Injectable({
  providedIn: 'root',
})
export class CustomerNumService {
  prepEndpoint(ep) {
    // 1. localhost에 포팅시
    return 'http://localhost:3000/' + ep;

    // 2. Heroku 클라우드 서버에 포팅시
    // return ep;
  }

  API_URL: string = this.prepEndpoint('cusnum/cus_nums/');

  constructor(private http: HttpClient) {}

  getCustomerNums() {
    return this.http.get<Cus_num[]>(this.API_URL, httpOptions);
  }
}
