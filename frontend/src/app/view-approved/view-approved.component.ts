import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Reim } from '../reim';
import { ReimService } from '../reim.service';

@Component({
  selector: 'app-view-approved',
  templateUrl: './view-approved.component.html',
  styleUrls: ['./view-approved.component.css']
})
export class ViewApprovedComponent implements OnInit {

  public listReim: Reim[] | undefined;
  public reim: Reim;
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
      pending: false,
      approved: true,
      type: ""
      }
    }

  public getAllReim(): void{
    this.reimService.getApproved(this.reim.approved).subscribe(
      (response: Reim[])=>{
        this.listReim = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public reimbById(reim: Reim): void{
    this.reimService.getReimByEmployee(reim.author).subscribe(
      (response: Reim[])=>{
        this.listReim = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  public logout(): void{
    console.log("logout")
    localStorage.setItem('loggedInManager', '');
    this.router.navigate(['/manager-login'])
  }
  ngOnInit(): void {
    this.getAllReim();
}

}
