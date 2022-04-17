import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;

  public loggedInEmployee: Employee | undefined;

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/employee`);
  }

  public getEmployeeById(id:  number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/employee/${id}`);
  }

  public getEmployeeByUsername(username: String) {
    return this.http.get<Employee>(`${this.apiServerUrl}/employee/byUsername/${username}`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee, id: number) {
    return this.http.put<Employee>(`${this.apiServerUrl}/employee/${id}`, employee);
  }
}
