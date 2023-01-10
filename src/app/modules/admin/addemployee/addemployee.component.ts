import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  emp: Employee = new Employee();

  constructor(public es: EmployeeService) { }

  reactiveForm : FormGroup;

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', Validators.required),
      gender : new FormControl('', Validators.required),
      role : new FormControl('', Validators.required),
      birthDate : new FormControl('', Validators.required),
      profile : new FormControl('', Validators.required),

    });

  }


  saveEmployee(emp: Employee) {
    this.es.saveEmployee(this.emp).subscribe();
    console.log(this.emp.birthDate);
  }
}
