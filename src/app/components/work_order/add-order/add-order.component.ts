import { Component, OnInit } from '@angular/core';
import {WorkOrder} from "../../../module/work_order";
import {Router} from "@angular/router";
import {OrderService} from "../../../services/order.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../services/article.service";
import {AffaireService} from "../../../services/affaire.service";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
order:WorkOrder=new WorkOrder();
neworderFG!:FormGroup;
  submitted!: boolean;

  constructor(private router:Router, private orderService:OrderService,private fb:FormBuilder,private articleService:ArticleService,private affaireService:AffaireService) { }

  ngOnInit(): void {
    this.neworderFG=this.fb.group({
      demandeur:this.fb.control(null,[Validators.required,Validators.minLength(1)]),
      remarque:this.fb.control(null),
      n_fiche_Intervention:this.fb.control(null),
      frais_Mission:this.fb.control(null),
      hebergement:this.fb.control(null),
      debut_Previsionnel:this.fb.control(null,[Validators.required]),
      fin_Previsionnel:this.fb.control(null,[Validators.required]),
      debut_Reel:this.fb.control(null),
      fin_Reel:this.fb.control(null),
      statut:this.fb.control("Activer",[Validators.required]),
    })
  }

  OnAddorder(){
    this.submitted = true;
    if(this.neworderFG.valid){
    this.order=this.neworderFG.value;

    this.orderService.addOrder(this.order)
      .subscribe(
        ()=>this.router.navigateByUrl("/list-order"),error =>
        console.error());
      this.submitted = false;
    ;
    }

  }




}
