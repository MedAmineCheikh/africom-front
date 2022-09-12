import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {activite} from "../module/Activite";

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  host = "http://localhost:8089/";

  constructor(private http: HttpClient) {

  }
  public getallactivites(): Observable<activite[]> {

    return this.http.get<activite[]>(this.host+"activites");
  }
  public addActivite(a:activite):Observable<Object>{
    return     this.http.post(this.host+"ajouteactivite",a);
  }
  public getActiviteById(code:String): Observable<any>{
    return this.http.get<any>(this.host+"activite/"+code);
  }
  public  updateActivite(a:activite):Observable<activite>{
    return this.http.put<activite>(this.host+"update-activite/",a);
  }
}
