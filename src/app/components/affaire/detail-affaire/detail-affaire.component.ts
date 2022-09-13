import { Component, OnInit } from '@angular/core';
import {Affaire} from "../../../module/affaire";
import {ActivatedRoute, Router} from "@angular/router";
import {AffaireService} from "../../../services/affaire.service";
import {Article} from "../../../module/article";

@Component({
  selector: 'app-detail-affaire',
  templateUrl: './detail-affaire.component.html',
  styleUrls: ['./detail-affaire.component.css']
})
export class DetailAffaireComponent implements OnInit {
affaire:Affaire=new Affaire();
id!:number;
articles!:Article[];
  constructor(private router: Router,private affaireService:AffaireService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.affaireService.getAffaireById(this.id).subscribe(value => {this.affaire=value;},error =>
      console.log(error));
    this.affaireService.getarticleAffaire(this.id).subscribe(value => {
      this.articles=value
    },error =>
      console.log(error));
  }

}
