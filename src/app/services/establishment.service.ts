import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(private http: HttpClient) { 
  }

  public GetEstablishments() {
    const url = `${environment.apiUrl}/establishment`; 
    console.log('GetEstablishments called', url);
    return this.http.get(url);
  }

}
