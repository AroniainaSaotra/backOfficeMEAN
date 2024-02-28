import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {

  URL_BASE = 'https://test-git-main-aroniainasaotras-projects.vercel.app'

  constructor(private http: HttpClient) { }

  getNbReservation(type:any){
    return this.http.post(this.URL_BASE+'/manager/nbDeReservation',type)
  }

  getChiffreAffaires(type:any){
    return this.http.post(this.URL_BASE+'/manager/chiffre-affaires',type)
  }

}
