import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Affaire} from "../../../module/affaire";
import {AffaireService} from "../../../services/affaire.service";

@Component({
  selector: 'app-list-affaire',
  templateUrl: './list-affaire.component.html',
  styleUrls: ['./list-affaire.component.css']
})
export class ListAffaireComponent implements OnInit {
affaires!:Affaire[];
  constructor(private router: Router,private affaireService:AffaireService) { }

  ngOnInit(): void {
    this.affaireService.getAllAffaires().subscribe(value => {this.affaires=value})
  }

  getId(id: number) {
    this.router.navigate(["update-affaire",id]);
   return  console.log("navigate passed");

  }
  getIdDetail(id: number) {
    this.router.navigate(["detail-affaire",id]);
   return  console.log("navigate passed");

  }
}
