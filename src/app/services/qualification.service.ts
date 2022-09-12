import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {qualification} from "../module/Qualification";

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  host = "http://localhost:8089/";

  constructor(private http: HttpClient) {

  }

  public getallqualifications(): Observable<qualification[]> {

    return this.http.get<qualification[]>(this.host+"qualificationss");
  }
  public addQualification(q:qualification):Observable<Object>{
    return     this.http.post(this.host+"savequalifications",q);
  }
  public getQualificationById(code:String): Observable<any>{
    return this.http.get<any>(this.host+"qualifications/"+code);
  }
  public  updateQualification(q:qualification):Observable<qualification>{
    return this.http.put<qualification>(this.host+"update-qualifications/",q);
  }
}
