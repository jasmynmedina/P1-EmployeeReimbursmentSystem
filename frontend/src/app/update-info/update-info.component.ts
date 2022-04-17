import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {

  public employee: Employee;
  message : string = ''
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
   updateEmployee(employeeForm: NgForm): void {
    this.employeeService.getEmployeeByUsername(localStorage.getItem('loggedInEmployee') || '').subscribe(
      (data:Employee)=>{
        console.log(data);
        employeeForm.value.roleId = data.roleId;
        employeeForm.value.role = data.role;
        this.employeeService.updateEmployee(employeeForm.value, data.id).subscribe(
          (response:Employee)=>{
            console.log("Successfully Updated");
            this.message = 'You have successfully updated your info!'
            localStorage.setItem('loggedInEmployee', response.username);
            this.employee = response;
            console.log(response)
          }
        )
      }
      ),
      (error: HttpErrorResponse) => {
        alert(error.message);
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
