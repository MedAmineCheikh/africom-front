import { Component, OnInit } from '@angular/core';
import {WorkOrder} from "../../../module/work_order";
import {Router} from "@angular/router";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
order:WorkOrder=new WorkOrder();
  constructor(private router:Router, private orderService:OrderService) { }

  ngOnInit(): void {
  }
  OnAddorder(){
    this.orderService.addOrder(this.order)
      .subscribe(()=>this.router.navigateByUrl("/list-order"),error =>
        console.error());
    ;
    }


}
