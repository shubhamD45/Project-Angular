import { Component, OnInit } from '@angular/core';
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


  saveEmployee(emp: Employee) {
    this.es.saveEmployee(this.emp).subscribe();
    console.log(this.emp.birthDate);
  }
}
