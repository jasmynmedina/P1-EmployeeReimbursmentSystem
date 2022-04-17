import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Manager } from './manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private apiServerUrl = environment.apiBaseUrl;

  public loggedInManager: Manager | undefined;

  constructor(private http: HttpClient) { }
  public getManagers(): Observable<Manager[]>
  {
    return this.http.get<Manager[]>(`${this.apiServerUrl}/manager`);
  }
  public getvById(id:  number): Observable<Manager> {
    return this.http.get<Manager>(`${this.apiServerUrl}/manager/${id}`);
  }

  public getManagerByUsername(username: string) {
    return this.http.get<Manager>(`${this.apiServerUrl}/manager/byUsername/${username}`);
  }

  public addManager(manager: Manager): Observable<Manager> {
    return this.http.post<Manager>(`${this.apiServerUrl}/manager/add`, manager);
  }

  public updateManager(manager: Manager, id: number) {
    return this.http.put<Manager>(`${this.apiServerUrl}/manager/${id}`, manager);
  }
}
