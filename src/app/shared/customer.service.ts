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
  constructor(private http : HttpClient) { }

  customer : Customer = {
    cName: '',
    birthDate: '',
    gender: '',
    maritalStatus: '',
    loanAmount: '',
    email: '',
    mobile:'',
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
	  pincode:''
  }

  proff : Profession = {
    ptype:'',
	  companyName:'',
	  desig:'',
	  mIncome:''
  }

  loan : LoanDetails = {
    expAmount:'',
	  expTenure:'',
	  bankName:'',
	  accNo:'',
	  lStatus:''
  }

  gurantor : Guarantor = {
    gName:'',
	  relation:'',
	  mobile:'',
	  desig:''
  }

  car : CarInfo = {
    regNo:'',
    modelType:'',
    purchaseDate:'',
    price:''
  }

  saveEnquiry(enq: Enquiry): Observable<Enquiry> {
    return this.http.post<Enquiry>(`${this.url2}`, enq);
  }

  getAllEnquiry(): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>("http://localhost:9011/enquiry/enquiries");
  }

  public saveCustomerData(customer : Customer) : any {
    return this.http.post(this.url, customer,{responseType:'text'});
  }

  savedocs(up: FormData): Observable<File> {
    return this.http.post<File>("http://localhost:9021/REAPI/uploadDocuments", up);
  }


  getCibil(id:string) : Observable<any> {
    return this.http.get<any>(`${this.url3}/${id}`);
  }

  changeStatus(id:String) : Observable<any> {
    return this.http.get<any>(`${this.url4}/${id}`);
  }

}
