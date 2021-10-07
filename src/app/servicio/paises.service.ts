import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  readonly apiUrl = 'https://restcountries.com/v3.1/all';
  constructor(private http:HttpClient) { 
  }

  getPaises(){
    return this.http.get(this.apiUrl);
  }
}
