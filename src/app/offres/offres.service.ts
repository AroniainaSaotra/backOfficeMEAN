import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  constructor(private http:HttpClient) { }

  listeOffre(){
    const URL_OFFRE = "https://test-git-main-aroniainasaotras-projects.vercel.app/offre/listeOffres";
    return this.http.get(URL_OFFRE);
  }
}
