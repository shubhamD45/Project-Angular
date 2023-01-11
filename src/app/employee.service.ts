import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docs } from './docs';
import { Employee } from './employee';
import { Enquiry } from './enquiry';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url1: string = 'http://localhost:9001/admin/employee';
  public url2: string = 'http://localhost:9011/enquiry/saveEnquiry';
  public url3: string = 'http://localhost:9001/admin/employee1';
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
    custId: 0,
    enquiryStatus: ''
  }


  constructor(private http: HttpClient) { }


  login(id: string, password: string): Observable<Employee> {
    console.log(this.url1);
    return this.http.get<Employee>(`${this.url1}/${id}/${password}`);
  }

  saveEmployee(emp: Employee): Observable<Employee> {

    return this.http.post<Employee>(this.url1, emp);
  }


  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:9001/admin/employees");
  }

  deleteEmployee(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url1}/${id}`);
  }

  deleteEmpPhoto(id: any): Observable<File> {
    return this.http.delete<any>(`${this.url1}/${id}`);
  }

  saveEnquiry(enq: Enquiry): Observable<Enquiry> {
    return this.http.post<Enquiry>(`${this.url2}`, enq);
  }

  getAllEnquiry(): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>("http://localhost:9011/enquiry/enquiries");
  }

  savedocs(up: FormData): Observable<File> {
    return this.http.post<File>("http://localhost:9021/REAPI/uploadDocuments", up);
  }

}
