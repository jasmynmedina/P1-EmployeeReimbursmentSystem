import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Reim } from './reim';

@Injectable({
  providedIn: 'root'
})
export class ReimService {
  private apiServerUrl = environment.apiBaseUrl;
  private reim: Reim;
  private emp: Employee;

  constructor(private http: HttpClient, private employeeService: EmployeeService){   
  this.reim = {
      id: 0,
      amount: 0,
      submitted: new Date(),
      resolved: new Date(),
      desc: "",
      author: 0,
      res: 0,
      pending: true,
      approved: true,
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
  }
  public getReims(): Observable<Reim[]> {
    return this.http.get<Reim[]>(`${this.apiServerUrl}/reimbursement`);
  }

  public getReimById(id: number): Observable<Reim> {
    return this.http.get<Reim>(`${this.apiServerUrl}/reimbursement/${id}`);
  }

  public getApproved(approved: boolean): Observable<Reim[]> {
    return this.http.get<Reim[]>(`${this.apiServerUrl}/reimbursement/byApproved/${approved}`);
  }

  public getPending(pending: boolean): Observable<Reim[]> {
    return this.http.get<Reim[]>(`${this.apiServerUrl}/reimbursement/byPending/${pending}`);
  }

  public getReimByEmployee(id: number): Observable<Reim[]> {
    return this.http.get<Reim[]>(`${this.apiServerUrl}/reimbursement/byEmployee/${id}`);
  }

  public addReim(r: Reim): Observable<Reim> {
    return this.http.post<Reim>(`${this.apiServerUrl}/reimbursement/add`, r);
  }

  public updateReim(r: Reim, id: number) {
    return this.http.post<Reim>(`${this.apiServerUrl}/reimbursement/${id}`, r)
  }

  // public approvedReim(r: Reim, id: number) {
  //   return this.http.post<Reim>(`${this.apiServerUrl}/attendance/approve/${id}`, r);
  // }

   public approvedReim(reimbursement: Reim, id: number) {
    console.log(reimbursement);
    reimbursement.approved = true;
    reimbursement.pending = false;
    reimbursement.resolved = new Date();
    reimbursement.res = 7;
    return this.http.put<Reim>(`${this.apiServerUrl}/reimbursement/${reimbursement.id}`, reimbursement);
}
}
