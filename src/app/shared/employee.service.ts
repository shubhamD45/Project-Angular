import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../pojo/employee';
import { Enquiry } from '../pojo/enquiry';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url1: string = 'http://localhost:9001/admin/employee';
  public url2: string = 'http://localhost:9001/admin/empProfile';

  emp: Employee = {
    eid: '',
    password: '',
    firstName: '',
    lastName: '',
    role: '',
    gender: '',
    birthDate: '',
    email: ''
  }

  enq: Enquiry = {
    customerName: '',
    pancardNumber: '',
    customerMobileNumber: 0,
    customerEmailId: '',
    age: '',
    custId: '',
    enquiryStatus: '',
    cibil: undefined
  }

  constructor(private http: HttpClient) { }

  public saveEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url1}`, emp);
  }

  savedocs(up: FormData): Observable<File> {
    return this.http.post<File>(`${this.url2}`, up);
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

  deleteEmpPhoto(id: any): Observable<File> {
    return this.http.delete<any>(`${this.url2}/${id}`);
  }


}
