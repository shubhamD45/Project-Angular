import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../pojo/address';
import { CarInfo } from '../pojo/car-info';
import { Customer } from '../pojo/customer';
import { Enquiry } from '../pojo/enquiry';
import { Guarantor } from '../pojo/guarantor';
import { LoanDetails } from '../pojo/loan-details';
import { Profession } from '../pojo/profession';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public url : string = "http://localhost:9021/REAPI/saveCustomerData";
  public url2: string = 'http://localhost:9011/enquiry/saveEnquiry';
  public url3: string = "http://localhost:9011/enquiry/cibilScore";
  public url4: string = "http://localhost:9011/enquiry/statusChange";

  public urlEnq: string = "http://localhost:9011/enquiry";
  public urlRe: string = "http://localhost:9021/REAPI";

  constructor(private http : HttpClient) { }

  customer : Customer = {
    cName: '',
    birthDate: '',
    gender: '',
    maritalStatus: '',
    loanAmount: 0,
    email: '',
    mobile:0,
    pan: '',
    adhar: '',
    documentStatus: '',
    address: new Address,
    proff: new Profession,
    loan: new LoanDetails,
    guarantor: new Guarantor,
    car: new CarInfo
  }

  address : Address = {
    area:'',
	  city:'',
	  district:'',
	  state:'',
	  pincode:0
  }

  proff : Profession = {
    ptype:'',
	  companyName:'',
	  desig:'',
	  mIncome:0
  }

  loan : LoanDetails = {
    expAmount:0,
	  expTenure:0,
	  bankName:'',
	  accNo:0,
	  lStatus:''
  }

  gurantor : Guarantor = {
    gName:'',
	  relation:'',
	  mobile:0,
	  desig:''
  }

  car : CarInfo = {
    regNo:'',
    modelType:'',
    purchaseDate:'',
    price:0
  }

  saveEnquiry(enq: Enquiry): Observable<Enquiry> {
    return this.http.post<Enquiry>(`${this.urlEnq}/saveEnquiry`, enq);
  }

  getAllEnquiry(): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>(`${this.urlEnq}/enquiryList`);
  }

  getCibil(id:number) : Observable<any> {
    return this.http.get<any>(`${this.urlEnq}/cibilScore/${id}`);
  }

  changeStatus(id:number) : Observable<any> {
    return this.http.get<any>(`${this.urlEnq}/statusChange/${id}`);
  }

  public saveCustomerData(customer : Customer) : any {
    return this.http.post(`${this.urlRe}/saveCustomerData`, customer,{responseType:'text'});
  }

  savedocs(up: FormData): Observable<File> {
    return this.http.post<File>(`${this.urlRe}/uploadDocuments`, up);
  }



}
