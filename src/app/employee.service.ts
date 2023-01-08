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
    id: '',
    password: '',
    firstname: '',
    lastname: '',
    role: '',
    profile: '',
    gender: '',
    birthdate: '',
    email: ''
  }

  constructor(private http: HttpClient) { }


  public login(id: string, password: string): Observable<Employee> {
    console.log(this.url1);
    return this.http.get<Employee>(`${this.url1}/${id}/${password}`);
  }

  public saveEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url1}`, emp);
  }

}
