import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url1: string = 'http://localhost:9001/admin/employee';

  emp: Employee = {
    eid: '',
    password: '',
    firstName: '',
    lastName: '',
    role: '',
    profile: '',
    gender: '',
    birthDate: '',
    email: ''
  }

  constructor(private http: HttpClient) { }

  public saveEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url1}`, emp);
  }

  public login(id: string, password: string): Observable<Employee> {
    console.log(this.url1);
    return this.http.get<Employee>(`${this.url1}/${id}/${password}`);
  }

  public getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:9001/admin/employees");
  }
 
  public deleteEmployee(id:any): Observable<any>{
    return this.http.delete<any>(`${this.url1}/${id}`);
  }
}
