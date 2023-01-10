import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Enquiry } from 'src/app/enquiry';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  enq: Enquiry[];
  constructor(private es: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEnquiry();
  }

  getAllEnquiry() {
    this.es.getAllEnquiry().subscribe(data => {
      this.enq = data;
    });
  }
}
