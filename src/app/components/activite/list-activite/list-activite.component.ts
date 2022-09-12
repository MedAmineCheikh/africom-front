import { Component, OnInit } from '@angular/core';
import {activite} from "../../../module/Activite";
import {Router} from "@angular/router";
import {ActiviteService} from "../../../services/activite.service";

@Component({
  selector: 'app-list-activite',
  templateUrl: './list-activite.component.html',
  styleUrls: ['./list-activite.component.css']
})
export class ListActiviteComponent implements OnInit {

  activites!:activite[];
  constructor(private router: Router,private activiteService:ActiviteService ) { }

  ngOnInit(): void {
    this.activiteService.getallactivites().subscribe(value => {this.activites=value});
  }

  getIdactivite(code: String) {
    this.router.navigate(["update-activite",code]);
  }
}
