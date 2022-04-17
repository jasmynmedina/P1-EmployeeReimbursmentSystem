import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-homepage',
  templateUrl: './employee-homepage.component.html',
  styleUrls: ['./employee-homepage.component.css']
})
export class EmployeeHomepageComponent implements OnInit {
  public employee: Employee;
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {
      this.employee={
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
    this.getEmployee();
  }

  getEmployee(): void {
    this.employeeService.getEmployeeByUsername(localStorage.getItem('loggedInEmployee') || '').subscribe(
      (data:Employee)=>{
        this.employee = data as Employee;
        console.log(data);
      }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    }
    logout(): void{
      console.log("logout")
      localStorage.setItem('loggedInEmployee', '');
      this.router.navigate(['/'])
    }

    
}