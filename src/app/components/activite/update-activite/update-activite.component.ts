import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActiviteService} from "../../../services/activite.service";
import {activite} from "../../../module/Activite";

@Component({
  selector: 'app-update-activite',
  templateUrl: './update-activite.component.html',
  styleUrls: ['./update-activite.component.css']
})
export class UpdateActiviteComponent implements OnInit {
  code!: String;
  activite:activite = new activite();

  constructor(private router: Router, private activatedroute: ActivatedRoute, private activiteService: ActiviteService) {
  }

  ngOnInit(): void {
    this.code = this.activatedroute.snapshot.params['code'];
    this.activiteService.getActiviteById(this.code).subscribe(
      value => {
        this.activite = value;
      }, error =>
        console.log(error));

  }

  OnUpdate() {
    this.activiteService.updateActivite(this.activite).subscribe(value => this.Gotoactivite()
      ,error =>console.log(error))
  }


  Gotoactivite() {
    this.router.navigateByUrl("/list-activite");
  }

}
