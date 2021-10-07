import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubDataService {

  readonly apiUrl = 'https://api.github.com/users/Asturiana88';
  constructor(private http:HttpClient) { 
  }

  getGithubData() : Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
