import { Component, OnInit } from '@angular/core';
import {WorkOrder} from "../../../module/work_order";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {
order:WorkOrder=new WorkOrder();
id!:string;
  constructor( private router: Router,private activatedroute:ActivatedRoute,private orderService:OrderService) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.orderService.getOrderById(this.id).subscribe(value => {this.order=value;},error =>
      console.log(error));
  }

  OnUpdate() {
    this.orderService.updateOrder(this.order).subscribe(value => {
    this.Gotoorders();
  },error =>console.log(error))
  }
  Gotoorders(){
    this.router.navigateByUrl("/list-order");

  }
}
