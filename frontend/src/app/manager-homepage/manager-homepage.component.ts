import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Manager } from '../manager';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-homepage',
  templateUrl: './manager-homepage.component.html',
  styleUrls: ['./manager-homepage.component.css']
})
export class ManagerHomepageComponent implements OnInit {

  public manager: Manager;
  public employee: Employee;
  public employees: Employee[] | undefined;
  constructor(private employeeService: EmployeeService, private managerService: ManagerService,
    private route: ActivatedRoute, private router: Router) {
    this.employee = {
      id: 0,
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      roleId: 0,
      role: ""
    }
    this.manager = {
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

  getManager(): void {
    this.managerService.getManagerByUsername(localStorage.getItem('loggedInManager') || '').subscribe(
      (data: Manager) => {
        this.manager = data as Employee;
        console.log(data);
      }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
  }
  public getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  logout(): void {
    console.log("logout")
    localStorage.setItem('loggedInManager', '');
    this.router.navigate(['/manager-login'])
  }

  ngOnInit(): void {
    this.getEmployees();
    this.getManager();
  }

}