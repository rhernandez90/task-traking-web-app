import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { BaseComponentComponent } from 'src/app/base-component/base-component.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  baseUrl = ""// this.getBaseUrl();
  constructor(private http: HttpClient) {

  }

  login(Username: string, Password: string): Observable<any> {
    return this.http.post(this.baseUrl + '/users/authenticate', {
      Username,
      Password
    }, httpOptions);
  }

  register(registerUserDto : any): Observable<any> {
    
    return this.http.post(this.baseUrl + '/users/register', registerUserDto , httpOptions);
  }
}
