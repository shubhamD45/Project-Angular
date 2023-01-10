import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Enquiry } from './enquiry';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url1: string = 'http://localhost:9001/admin/employee';
  public url2: string = 'http://localhost:9011/enquiry/saveEnquiry';
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

  enq: Enquiry = {
    customerName: '',
    pancardNumber: '',
    customerMobileNumber: 0,
    customerEmailId: '',
    age: '',
    custId: 0,
    enquiryStatus: ''
  }

  constructor(private http: HttpClient) { }


  login(id: string, password: string): Observable<Employee> {
    console.log(this.url1);
    return this.http.get<Employee>(`${this.url1}/${id}/${password}`);
  }

  saveEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.url1}`, emp);
  }

  saveEmployee1(fd: FormData) {
    return this.http.post(this.url1, fd);
  }


  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:9001/admin/employees");
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url1}/${id}`);
  }

  saveEnquiry(enq: Enquiry): Observable<Enquiry> {
    return this.http.post<Enquiry>(`${this.url2}`, enq);
  }

  getAllEnquiry(): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>("http://localhost:9011/enquiry/enquiries");
  }
}
