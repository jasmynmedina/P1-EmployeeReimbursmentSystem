import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomepageComponent } from './employee-homepage/employee-homepage.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomeComponent } from './home/home.component';
import { ManagerHomepageComponent } from './manager-homepage/manager-homepage.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ReviewReimbursementComponent } from './review-reimbursement/review-reimbursement.component';
import { SubmitReimbursementComponent } from './submit-reimbursement/submit-reimbursement.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { ViewApprovedComponent } from './view-approved/view-approved.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [
  {path: 'manager-login', component: ManagerLoginComponent},
  {path: '', component: EmployeeLoginComponent},
  {path: 'employee-homepage', component: EmployeeHomepageComponent},
  {path: 'manager-homepage', component: ManagerHomepageComponent},
  {path: 'update-info', component: UpdateInfoComponent},
  {path: 'submit-reimbursement', component: SubmitReimbursementComponent},
  {path: 'review-reimbursement', component: ReviewReimbursementComponent},
  {path: 'all-employees', component: ViewEmployeesComponent},
  {path: 'view-approve', component: ViewApprovedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
