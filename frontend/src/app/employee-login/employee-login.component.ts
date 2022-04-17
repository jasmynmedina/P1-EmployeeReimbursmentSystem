import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loggedInEmployee: Employee;
  message : string = ''
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { 
    this.loggedInEmployee={
      id: 0,
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      roleId: 0,
      role: ""
    }
  }
  ngOnInit(): void {
  }
  login(loginForm: NgForm): void
  {
    console.log(loginForm)
    this.employeeService.getEmployeeByUsername(loginForm.value.username).subscribe(
      (data:Employee)=>{
        console.log(data);
        if (data.password == loginForm.value.password, data.role == "employee") {
          localStorage.setItem('loggedInEmployee', data.username);
          localStorage.setItem('loggedInManager', '')
          console.log("Login Success")
          this.router.navigate(['/employee-homepage']);
        } else {
          console.log("Failed to Login")
          this.message = 'Invalid username or password'
          if(data.role == "manager") {
            console.log("Failed to Login")
            this.message = 'Managers cannot login via Employee login page'
          }
        }
      }
    )
  }
  logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInEmployee', '');
    this.router.navigate(['/'])
  }
}
