import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  readonly apiUrl = 'https://restcountries.com';
  constructor(private http:HttpClient) { 
  }

  getPaises(){
    return this.http.get(this.apiUrl + '/v3.1/all');
  }

  getByContinent(continent: string){
    return this.http.get(this.apiUrl + `/v2/continent/${continent}`);
  }

}
