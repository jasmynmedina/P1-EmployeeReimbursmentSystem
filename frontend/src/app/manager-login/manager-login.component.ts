import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Manager } from '../manager';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  loggedinManager: Manager;
  message : string = ''
  constructor(
    private managerService: ManagerService,
    private router: Router,
  ) { 
    this.loggedinManager={
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
    this.managerService.getManagerByUsername(loginForm.value.username).subscribe(
      (data:Manager)=>{
        console.log(data);
        if (data.password == loginForm.value.password, data.role == 'manager') {
          localStorage.setItem('loggedInEmployee', '');
          localStorage.setItem('loggedInManager', data.username)
          console.log("Login Success")
          this.router.navigate(['/manager-homepage']);
        } else {
          console.log("Failed to Login")
          this.message = 'Invalid username or password'
          if(data.role == "employee") {
            console.log("Failed to Login")
            this.message = 'Employees cannot login via Manager login page'
          }
        }
      }
    )
  }
}
