import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  emp: Employee = new Employee();


  constructor(public es: EmployeeService) { }

  ngOnInit(): void {
  }
  // saveEmployee(emp: Employee) {
  //   this.es.saveEmployee(emp).subscribe();
  //   console.log(this.emp.birthdate);
  // }

  myForm = new FormGroup({

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    role: new FormControl(''),
    gender: new FormControl(''),
    email: new FormControl(''),
    birthDate: new FormControl(''),
    password: new FormControl(''),

    profile: new FormControl(''),
    fileSource: new FormControl('')


  });

  profile: any;

  saveEmployee() {

    const d = JSON.stringify(this.myForm.value);

    const fd = new FormData();

    fd.append('firstName', d);
    fd.append('lastName', d);
    fd.append('role', d);
    fd.append('email', d);
    fd.append('gender', d);
    fd.append('birthDate', d);
    fd.append('password', d);

    fd.append('profile', this.profile);


    this.es.saveEmployee1(fd).subscribe();

  }
  get f() {

    return this.myForm.controls;

  }


  // onFileChange(event: any) {

  //   if (event.target.files.length > 0) {

  //     const profile = event.target.files[0];

  //     this.myForm.patchValue({

  //       fileSource: profile

  //     });

  //   }
  // }
  onFileChange(event: any) {

    this.profile = event.target.files[0];
  }
}
