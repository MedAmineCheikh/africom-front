import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { qualification } from 'src/app/module/Qualification';
import {QualificationService} from "../../../services/qualification.service";

@Component({
  selector: 'app-add-qualification',
  templateUrl: './add-qualification.component.html',
  styleUrls: ['./add-qualification.component.css']
})
export class AddQualificationComponent implements OnInit {
  qualification:qualification=new qualification();
  constructor(private router:Router,private qualificationService:QualificationService) { }

  ngOnInit(): void {
  }
  OnaddQualification(){
    this.qualificationService.addQualification(this.qualification)
      .subscribe(()=>this.router.navigateByUrl("/qualification"));
  }
}
