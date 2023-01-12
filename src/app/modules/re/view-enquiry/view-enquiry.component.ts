import { Component, OnInit } from '@angular/core';
import { Enquiry } from 'src/app/pojo/enquiry';
import { CustomerService } from 'src/app/shared/customer.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  
  enq: Enquiry[];
  constructor(private cs: CustomerService) { }

  ngOnInit(): void {
    this.getAllEnquiry();
  }

  getAllEnquiry() {
    this.cs.getAllEnquiry().subscribe(data => {
      this.enq = data;
    });
  }

  


}
