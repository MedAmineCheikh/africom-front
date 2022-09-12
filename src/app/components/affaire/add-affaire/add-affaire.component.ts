import { Component, OnInit } from '@angular/core';
import {Affaire} from "../../../module/affaire";
import {Router} from "@angular/router";
import {AffaireService} from "../../../services/affaire.service";

@Component({
  selector: 'app-add-affaire',
  templateUrl: './add-affaire.component.html',
  styleUrls: ['./add-affaire.component.css']
})
export class AddAffaireComponent implements OnInit {
affaire:Affaire=new Affaire();
  constructor(private router: Router,private affaireService:AffaireService) { }

  ngOnInit(): void {
  }

  OnAddaffaire() {
    this.affaireService.addAffaire(this.affaire)
      .subscribe(()=>this.router.navigateByUrl("/list-affaire"),error =>
        console.error());
    ;
  }
}
