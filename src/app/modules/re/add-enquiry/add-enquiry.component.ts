import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
      pancard: new FormControl('', Validators.required),
      mobilenumber: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),

    });

  }

  onSubmit() {
    console.log(this.reactiveForm);
  }
}

