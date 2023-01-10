import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emp: Employee = new Employee();
  reactive: FormGroup;
  hide: any;
  constructor(private es: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.reactive = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)])

    });
    this.mainLogin(this.emp.eid, this.emp.password);
  }
  onsubmit() {
    console.log(this.reactive);
    this.ngOnInit();

  }

  public login(id: string, password: string) {
    this.es.login(id, password).subscribe(data => {
      this.emp = data;

      if (this.emp.role == 're') {
        this.router.navigate(['modules/re']);
      } else if (this.emp.role == 'oe') {
        this.router.navigate(['modules/oe']);
      } else if (this.emp.role == 'cm') {
        this.router.navigate(['modules/cm']);
      } else if (this.emp.role == 'ah') {
        this.router.navigate(['modules/ah']);
      } else {
        alert("Incorrect login credentials");
      }
    });
  }



  navigateToHome() {
    this.router.navigate(['home']);
  }

  mainLogin(id: string, password: string) {
    if (id == 'admin' && password == 'admin123') {
      this.router.navigate(['modules/admin']);
    } else {
      this.login(id, password);
    }


  }

}
