import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  public getBooks() {
    const url = `${environment.apiUrl}/books`; 
    console.log('getBooks called', url);
    return this.http.get(url);
  }
}
