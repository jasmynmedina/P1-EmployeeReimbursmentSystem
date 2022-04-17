import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Manager } from './manager';
import { ManagerService } from './manager.service';
import { Reim } from './reim';
import { ReimService } from './reim.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public employees: Employee[] | undefined;
  public managers: Manager[] | undefined;
  public reims: Reim[] | undefined;
  
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees= response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  getManagers() {
    this.managerService.getManagers().subscribe 
    (
      (response: Manager[])=>{
        this.managers=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  getReims() {
    this.reimService.getReims().subscribe (
      (response: Reim[])=> {
        this.reims=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  title = 'frontend';
  constructor(private employeeService: EmployeeService, private managerService: ManagerService, private reimService: ReimService){
   }
  ngOnInit(): void {
  }
}
