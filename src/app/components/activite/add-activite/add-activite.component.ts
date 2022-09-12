import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ActiviteService} from "../../../services/activite.service";
import {activite} from "../../../module/Activite";
@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {
  activite:activite =new activite();
  constructor(private router: Router,private activiteService:ActiviteService ) { }

  ngOnInit(): void {
  }
  OnaddActivite(){
    this.activiteService.addActivite(this.activite)
      .subscribe(()=>this.router.navigateByUrl("/list-activite"));
  }
}
