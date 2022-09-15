import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Affaire} from "../module/affaire";
import {Article} from "../module/article";

@Injectable({
  providedIn: 'root'
})
export class AffaireService {
  host = "http://localhost:8088/";
  constructor(private http: HttpClient) { }
  public getAffaireById(id:number):Observable<any>{
    return this.http.get<any>(this.host+"affaire/"+id);
  }
  public getAllAffaires():Observable<Affaire[]>{
    return this.http.get<Affaire[]>(this.host+"affaires");
  }
  public addAffaire(a:Affaire):Observable<Object>{
    return this.http.post(this.host+"saveaffaire",a)
  }
  public updateAffaire(a:Affaire):Observable<Affaire>{
    return this.http.put<Affaire>(this.host+"update-affairedto/",a);
  }
  public getarticleAffaire(id:number):Observable<Article[]>{
    return this.http.get<Article[]>(this.host+"affaireArticle/"+id)
  }

}
