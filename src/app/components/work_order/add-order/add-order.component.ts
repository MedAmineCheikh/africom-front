import { Component, OnInit } from '@angular/core';
import {WorkOrder} from "../../../module/work_order";
import {Router} from "@angular/router";
import {OrderService} from "../../../services/order.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ArticleService} from "../../../services/article.service";
import {AffaireService} from "../../../services/affaire.service";
import {Affaire} from "../../../module/affaire";

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
order:WorkOrder=new WorkOrder();
neworderFG!:FormGroup;
  submitted!: boolean;
  affairepage:number=0;
  affairesize:number=2;
  idaffaire!:number ;
  paginationaffaire!:number | undefined ;
  affaires!:Affaire[];
  Keyword:String='';
  addaffaire:boolean=false;
  affaire:Affaire=new Affaire();

  constructor(private router:Router, private orderService:OrderService,private fb:FormBuilder,private articleService:ArticleService,private affaireService:AffaireService) { }

  ngOnInit(): void {
    this.affaireService.searchAffairepage(this.Keyword,this.affairepage,this.affairesize).subscribe(
      value => {this.affaires=value} ,error => console.log(error));

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
onbooladdAffaire(){
  this.submitted = true;
     this.addaffaire=! this.addaffaire;

    if (this.affaires!=null){
      this.paginationaffaire= this.affaires?.find(value => value.totalPages>=1)?.totalPages;
    }
console.log(this.paginationaffaire)
     return console.log(this.addaffaire)
  this.submitted = false;
}

  OnAddorder(){
    this.submitted = true;
    if(this.neworderFG.valid){
    this.order=this.neworderFG.value;
    if (this.affaire.n_Affiaire==undefined){
    this.idaffaire=0;
      this.orderService.addOrder(this.order,this.idaffaire)
        .subscribe(
          ()=>this.router.navigateByUrl("/list-order"),error =>
            console.error());
      this.submitted = false;
    }else {
    this.orderService.addOrder(this.order,this.affaire.n_Affiaire)
      .subscribe(
        ()=>this.router.navigateByUrl("/list-order"),error =>
        console.error());
      this.submitted = false;}

    }

  }


  onSearchAffaire(kw:String){
    this.Keyword=kw;
return this.affaireService.searchAffairepage(this.Keyword,this.affairepage,this.affairesize).subscribe(
  value => {this.affaires=value},error => console.log(error)
);
  }

  getTopageAffaire(pageAffaire: number) {
    this.affairepage=pageAffaire;
    this.affaireService.searchAffairepage(this.Keyword,this.affairepage,this.affairesize).subscribe(
      value => {this.affaires=value},error => console.log(error)
    );
  }

  getAffaireid(n_Affiaire: number) {
    return  this.affaireService.getAffaireById(n_Affiaire).subscribe(value => {this.affaire=value},
      error => console.log(error));
  }

  OnsearchAffaire(Keyword: String) {

      this.affaireService.searchAffairepage(this.Keyword,this.affairepage,this.affairesize).subscribe(
        value => {this.affaires=value} ,error => console.log(error));
  }

  OnRemoveaffaire() {
    return this.affaire.n_Affiaire=0;
  }
}
