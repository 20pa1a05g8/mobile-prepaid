import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private baseUrl = 'http://localhost:8080/api'; // Adjust the base URL as necessary

  constructor(private http: HttpClient) { }

  getUsersWithExpiringPlans(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/expiring-plans`);
  }

  validateMobile(mobile: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/validate/${mobile}`);
  }

  getRechargePlans(): Observable<any> {
    return this.http.get(`${this.baseUrl}/plans`);
  }

  recharge(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/recharge`, data);
  }

  // Add more methods as needed
}

