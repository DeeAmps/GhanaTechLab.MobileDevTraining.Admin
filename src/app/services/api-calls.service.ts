import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  apiUrl = 'http://localhost:3000/api';
  constructor(public http: HttpClient) { }


  getAllApplicants() {
    return this.http.get(`${this.apiUrl}/applicationInfo/getAll`);
  }

  loginAdmin(data) {
    return this.http.post(`${this.apiUrl}/admin/login`, data);
  }

  confirmToken(data) {
    return this.http.post(`${this.apiUrl}/admin/confirmToken`, data);
  }
}
