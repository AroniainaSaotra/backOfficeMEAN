import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_LOGIN = "https://test-git-main-aroniainasaotras-projects.vercel.app/user/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  checkLogin(body:any){
    return this.http.post(URL_LOGIN,body);
  }

}
