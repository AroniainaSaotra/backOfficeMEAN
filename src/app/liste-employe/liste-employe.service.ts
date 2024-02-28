import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeEmployeService {

  constructor(private http:HttpClient) { }

  getListeEmploye(){
    const URL_LISTE_EMPLOYE = "https://test-git-main-aroniainasaotras-projects.vercel.app/listeemploye";
    return this.http.get(URL_LISTE_EMPLOYE);
  }
}
