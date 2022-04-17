import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Reim } from '../reim';
import { ReimService } from '../reim.service';

@Component({
  selector: 'app-review-reimbursement',
  templateUrl: './review-reimbursement.component.html',
  styleUrls: ['./review-reimbursement.component.css']
})
export class ReviewReimbursementComponent implements OnInit {

  public listReim: Reim[] | undefined;
  public listEmployee: Employee[] | undefined;
  public reim: Reim;
  public managerLoggedIn: boolean;
  public employeeLoggedIn: boolean;
  public emp: Employee;
  constructor(private reimService: ReimService,
    private router: Router,
    private employeeService: EmployeeService) {
      this.reim={
      id: 0,
      amount: 0,
      submitted: new Date(),
      resolved: new Date(),
      desc: "",
      author: 0,
      res: 0,
      pending: true,
      approved: false,
      type: ""
      }
      this.emp={
        id: 0,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        roleId: 0,
        role: ""
      }
    this.managerLoggedIn = false;
    this.employeeLoggedIn = false;
  }
  ngOnInit(): void {
    this.getAllReim();
    if(localStorage.getItem("loggedInEmployee") == '')
    {
      this.managerLoggedIn = true;
      this.getAllReim();
    }
    else if(localStorage.getItem("loggedInManager") == '')
    {
      this.employeeLoggedIn = true;
      this.getEmployeeReim();
    }
  }

  public getAllReim(): void{
    this.reimService.getPending(this.reim.pending).subscribe(
      (response: Reim[])=>{
        this.listReim = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  public getEmployeeReim(): void{
    console.log("employee reim")
    this.employeeService.getEmployeeByUsername(localStorage.getItem("loggedInEmployee") ||'').subscribe(
      (data: Employee)=>
      {
        this.reimService.getReimByEmployee(data.id).subscribe(
          (response: Reim[])=>{
            this.listReim = response;
          },
          (error: HttpErrorResponse)=>{
            alert(error.message);
          }
        )
      }
    )
    
    }
  public approve(reimbursement: Reim): void{
    this.reimService.approvedReim(reimbursement, reimbursement.id).subscribe(
      (response: Reim)=>{
        
        console.log("Successful Update")
      },
      (error: HttpErrorResponse) => {alert(error.message)}
    );
  }
  public logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInManager', '');
    this.router.navigate(['/manager-login'])
  }

}
