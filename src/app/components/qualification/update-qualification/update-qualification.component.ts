import { Component, OnInit } from '@angular/core';
import { qualification } from 'src/app/module/Qualification';
import {ActivatedRoute, Router} from "@angular/router";
import {QualificationService} from "../../../services/qualification.service";

@Component({
  selector: 'app-update-qualification',
  templateUrl: './update-qualification.component.html',
  styleUrls: ['./update-qualification.component.css']
})
export class UpdateQualificationComponent implements OnInit {
  code!:String;
  qualification:qualification=new qualification();
  constructor(private router: Router,private activatedroute:ActivatedRoute,private qualificationService:QualificationService) { }

  ngOnInit(): void {
    this.code=this.activatedroute.snapshot.params['code'];
    this.qualificationService.getQualificationById(this.code).
    subscribe(value => {this.qualification=value;},error =>
      console.log(error));
  }
  OnUpdate(){
    this.qualificationService.updateQualification(this.qualification)
      .subscribe(value => {
        this.GotoQualifications();
      },error =>console.log(error))

  }
  GotoQualifications(){
    this.router.navigateByUrl("/list-qualification");
  }
}
