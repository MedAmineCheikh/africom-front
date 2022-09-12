import { Component, OnInit } from '@angular/core';
import {qualification} from "../../../module/Qualification";
import {Router} from "@angular/router";
import {QualificationService} from "../../../services/qualification.service";

@Component({
  selector: 'app-list-qualification',
  templateUrl: './list-qualification.component.html',
  styleUrls: ['./list-qualification.component.css']
})
export class ListQualificationComponent implements OnInit {
  qualifications!:qualification[];
  constructor(private router: Router,private qualificationService:QualificationService) { }

  ngOnInit(): void {
    this.qualificationService.getallqualifications().subscribe(value => {this.qualifications=value});
  }


  getIdqualification(code: String) {
    this.router.navigate(["update-qualification",code]);

  }

}
