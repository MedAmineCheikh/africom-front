import { Component, OnInit } from '@angular/core';
import {WorkOrder} from "../../../module/work_order";
import {Router} from "@angular/router";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {
orders!:WorkOrder[];
  constructor(private router:Router, private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(value => {this.orders=value},error =>
    console.error());
  }

  getOrderId(id: string) {
    this.router.navigate(["update-order",id]);
    console.log("navigate passed");
    return console.log(id)

      ;
  }
}
