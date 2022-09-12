import {Component, ElementRef, OnInit} from '@angular/core';
import {employe} from "../../../module/employe";
import {Router} from "@angular/router";
import {EmployeService} from "../../../services/employe.service";

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {
employes!:employe[];
  constructor(private elementRef: ElementRef,private router:Router,private employeService:EmployeService) { }

  ngOnInit(): void {
    this.employeService.getallemployes().subscribe((value) =>{ this.employes=value} );

  }

  public getIdemployepick(matricule:String)
  {
    this.router.navigate(["update-employe",matricule]);
    console.log("navigate passed");
    return console.log(matricule)

      ;
  }
}
