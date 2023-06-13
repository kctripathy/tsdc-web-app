import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  public getStaffs() {
    const url = `${environment.apiUrl}/staffs`; 
    return this.http.get(url);
  }

  public getDepartments() {
    const url = `${environment.apiUrl}/departments`; 
    return this.http.get(url);
  }
}
