import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService } from 'src/app/employee.service';
import { Enquiry } from 'src/app/enquiry';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.css']
})
export class AddEnquiryComponent implements OnInit {

  constructor(private es: EmployeeService, private router: Router) { }
  reactiveForm: FormGroup;
  enq: Enquiry = new Enquiry();
  ngOnInit(): void {

    this.reactiveForm = new FormGroup({

      customername: new FormControl('', Validators.required),
      pancard: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      mobilenumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.min(18)]),

    });


  }


  saveEnquiry(enq: Enquiry) {
    this.es.saveEnquiry(enq).subscribe();
    this.router.navigate(['modules/re/viewenquiry']);

  }

  refresh() {

  }

}