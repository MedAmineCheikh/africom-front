import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {employe} from "../module/employe";


@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  host = "http://localhost:8089/";
  constructor(private http: HttpClient) {

  }

  public getallemployes(): Observable<employe[]> {

    return this.http.get<employe[]>(this.host+"employes");
  }
  public addEmploye(e:employe):Observable<Object>{
    return     this.http.post(this.host+"saveemploye",e);
  }
  public getEmployeById(matricule:String): Observable<any>{
    return this.http.get<any>(this.host+"employe/"+matricule);
  }
  public  updateEmploye(e:employe):Observable<employe>{
    return this.http.put<employe>(this.host+"update-employedto/",e);
  }
}
