import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationHoraireService {

  constructor(private http:HttpClient) { }

  listeEmployeById(idEmploye:any){
    const URL_LIST_EMPLOYE_ID= "https://test-git-main-aroniainasaotras-projects.vercel.app/employe/listeemployeId/"+idEmploye;
    return this.http.get(URL_LIST_EMPLOYE_ID);
  }

  modificationHoraire(idEmploye:any, body:any){
    const URL_MODIFY_HORAIRE="https://test-git-main-aroniainasaotras-projects.vercel.app/employe/modifyHoraire/"+idEmploye;
    return this.http.put(URL_MODIFY_HORAIRE,body);
  }
}
