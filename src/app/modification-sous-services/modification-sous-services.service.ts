import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModificationSousServicesService {

  constructor(private http:HttpClient) { }

  listeSousServiceId(idSousService:any){
    const URL_SOUS_SERVICE_ID = "https://test-git-main-aroniainasaotras-projects.vercel.app/sous-services/listeSousServicesById/"+idSousService;
    return this.http.get(URL_SOUS_SERVICE_ID);
  }

  modifySousService(idSousService:any,body:any){
    const URL_MODIFY_SOUS_SERVICE="https://test-git-main-aroniainasaotras-projects.vercel.app/sous-services/modifySousService/"+idSousService;
    return this.http.post(URL_MODIFY_SOUS_SERVICE,body);
  }
}
