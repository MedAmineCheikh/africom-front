import { Component, OnInit } from '@angular/core';
import {Affaire} from "../../../module/affaire";
import {ActivatedRoute, Router} from "@angular/router";
import {AffaireService} from "../../../services/affaire.service";

@Component({
  selector: 'app-update-affaire',
  templateUrl: './update-affaire.component.html',
  styleUrls: ['./update-affaire.component.css']
})
export class UpdateAffaireComponent implements OnInit {
  id!:number;
  affaire:Affaire=new Affaire();

  constructor(private router: Router,private affaireService:AffaireService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.affaireService.getAffaireById(this.id).subscribe(value => {this.affaire=value;},error =>
      console.log(error));
  }

  OnUpdate() {
    this.affaireService.updateAffaire(this.affaire).subscribe(value => {
      this.reload();
    },error =>console.log(error))
  }
  reload(){
    this.router.navigate(["detail-affaire",this.id])
      .then(() => {
        window.location.reload();
      });
  }
}
