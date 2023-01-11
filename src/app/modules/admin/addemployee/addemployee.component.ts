import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  emp: Employee = new Employee();
  p: File;
  public url3: string = 'http://localhost:9001/admin/savedoc';
  constructor(public es: EmployeeService, public http: HttpClient, public router: Router) { }

  ngOnInit(): void {
  }

  onchange(event: any) {

    this.p = event.target.files[0];

  }

  saveEmployee(emp: any) {
    this.es.saveEmployee(emp).subscribe();
    this.onclick();
    window.location.reload();
  }

  onclick() {
    console.log("shubham");
    const up = new FormData();
    up.append('profile1', this.p, this.p.name);
    console.log("shubham");
    // this.es.saveEmployee1(up).subscribe();
    return this.http.post(this.url3, up).subscribe();
  }

  navToAdmin() {
    this.router.navigate(['modules/admin']);
  }

}