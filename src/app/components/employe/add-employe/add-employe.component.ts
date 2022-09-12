import { Component, OnInit } from '@angular/core';
import {employe} from "../../../module/employe";
import {EmployeService} from "../../../services/employe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
employe:employe=new employe();
  constructor(private router:Router,private employeService:EmployeService) { }

  ngOnInit(): void {
  }
  OnaddEmploye() {
    this.employeService.addEmploye(this.employe)
      .subscribe(()=>this.router.navigateByUrl("/employe"))
    ;
    console.log(this.employe)}
}
