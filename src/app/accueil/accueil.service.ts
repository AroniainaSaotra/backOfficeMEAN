import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
 
  constructor(private http: HttpClient) { }

  listeRDVEmploye(idEmploye:any){
    const URL_LIST_RDV = "https://test-git-main-aroniainasaotras-projects.vercel.app/employe/rendezVousEmployeEncours/"+idEmploye;
    return this.http.get(URL_LIST_RDV);
  }

  listeRDVEmployeTermine(idEmploye:any){
    const URL_LIST_RDV_TERMINE = "https://test-git-main-aroniainasaotras-projects.vercel.app/employe/rendezVousEmployeTermine/"+idEmploye;
    return this.http.get(URL_LIST_RDV_TERMINE); 
  }

  statutChange(id_rendez_vous : any, status : any){
    const URL_STATUT = "https://test-git-main-aroniainasaotras-projects.vercel.app/employe/rendezvousStatus/"+id_rendez_vous;
    return this.http.put(URL_STATUT,status);
  }
}
