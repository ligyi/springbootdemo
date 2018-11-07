import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  private baseUrl = 'http://localhost:8080/api/customers';
 
  constructor(private http: HttpClient) { }
 
  getCustomer(id: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }
 
  updateCustomer(id: String, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteCustomer(id: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getCustomersByGender(gender: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/gender/${gender}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}