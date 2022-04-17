import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { SubmitReimbursementComponent } from './submit-reimbursement/submit-reimbursement.component';
import { ReviewReimbursementComponent } from './review-reimbursement/review-reimbursement.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ViewApprovedComponent } from './view-approved/view-approved.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeHomepageComponent,
    ManagerHomepageComponent,
    ManagerLoginComponent,
    HomeComponent,
    EmployeeLoginComponent,
    UpdateInfoComponent,
    SubmitReimbursementComponent,
    ReviewReimbursementComponent,
    ViewEmployeesComponent,
    ViewApprovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
