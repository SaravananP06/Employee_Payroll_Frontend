import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: String = 'http://localhost:8083/employeepayrollservice/';

  constructor(private httpClient: HttpClient) { }

  getEmployeedata(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "get");
  }

  addEmployeedata(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "create", body);
  }

  updateEmployeedata(id: number, body: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "update/" + id, body);
  }

  deleteEmployeedata(empId: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "delete/" + empId);
  }
}
