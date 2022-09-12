import { Component, OnInit } from '@angular/core';
import {employe} from "../../../module/employe";
import {EmployeService} from "../../../services/employe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
  matricule!: String ;
  employe:employe=new employe();

  constructor(private employeService: EmployeService, private router: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.matricule = this.activatedroute.snapshot.params['matricule'];
    this.employeService.getEmployeById(this.matricule).subscribe(value => {this.employe=value;},error =>
      console.log(error));
  }

  OnUpdate() {
    this.employeService.updateEmploye(this.employe).subscribe(value => {
      this.GotoEmployes();
    },error =>console.log(error))
  }
  GotoEmployes(){
    this.router.navigateByUrl("/list-employe");
  }


}
