import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = ["http://localhost:3000/"];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post(URL + 'employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(URL+'employees/'+id, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get(URL+'employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(URL+`employees/${id}`);
  }
}
