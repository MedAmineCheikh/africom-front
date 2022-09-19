import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkOrder} from "../module/work_order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  host = "http://localhost:8088/";
  constructor(private http: HttpClient) { }
  public getOrderById(id:String):Observable<any>{
    return this.http.get<any>(this.host+"workorder/"+id);
  }
  public getAllOrders():Observable<WorkOrder[]>{
    return this.http.get<WorkOrder[]>(this.host+"workorders");
  }
  public addOrder(w:WorkOrder,idaffaire:number):Observable<Object>{
    return this.http.post(this.host+"saveworkorder/"+idaffaire,w)
  }
  public updateOrder(w:WorkOrder):Observable<WorkOrder>{
    return this.http.put<WorkOrder>(this.host+"update-workorderdto/",w);
  }
}
