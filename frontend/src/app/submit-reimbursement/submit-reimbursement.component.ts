import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Reim } from '../reim';
import { ReimService } from '../reim.service';

@Component({
  selector: 'app-submit-reimbursement',
  templateUrl: './submit-reimbursement.component.html',
  styleUrls: ['./submit-reimbursement.component.css']
})
export class SubmitReimbursementComponent implements OnInit {

  public reim: Reim;
  public employee: Employee;
  message : string = ''
  constructor(private employeeService: EmployeeService, private reimService: ReimService, 
    private route: ActivatedRoute, 
    private router: Router, 
    private appComponent: AppComponent) { 
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
  }

  ngOnInit(): void {
    this.getEmployee();
  }


  submitReim(addForm: NgForm): void {
    addForm.value.author=this.employee.id
    console.log(addForm.value);
    this.message = 'Reimbursement Submitted Successfully'
    this.reimService.addReim(addForm.value).subscribe(
    (response: Reim)=> {
          this.appComponent.getEmployees();
        }
      ),
      (error:HttpErrorResponse) => {
        this.message = 'Reimbursement did not submit'
        alert(error.message)
      }
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