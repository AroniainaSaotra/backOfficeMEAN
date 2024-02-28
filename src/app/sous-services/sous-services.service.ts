import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SousServicesService {

  constructor(private http:HttpClient) { }

  listeSousServices(){
    const URL_LISTE_SOUS_SERVICES = "https://test-git-main-aroniainasaotras-projects.vercel.app/sous-services/listeSousServices";
    return this.http.get(URL_LISTE_SOUS_SERVICES);
  }
}
