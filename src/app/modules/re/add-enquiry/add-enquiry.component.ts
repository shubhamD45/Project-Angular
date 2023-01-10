import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.css']
})
export class AddEnquiryComponent implements OnInit {

  constructor() { }
  reactiveForm: FormGroup;

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({

      customername: new FormControl('', Validators.required),
      pancard: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
      mobilenumber: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required,Validators.min(18)]),

    });

  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

}
