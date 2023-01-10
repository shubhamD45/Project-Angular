import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  emp: Employee[];



  constructor(private router: Router, private es: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }


  getEmployeeList() {
    this.es.getEmployeeList().subscribe(data => {
      this.emp = data;
    });
  }

  deleteEmployee(eid: string) {

    this.es.deleteEmployee(eid).subscribe();
    window.location.reload();
  }

  navigateToAddEmployee() {
    this.router.navigate(['modules/admin/addemployee'])
  }



}
