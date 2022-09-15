import { Component, OnInit } from '@angular/core';
import {Affaire} from "../../../module/affaire";
import {ActivatedRoute, Router} from "@angular/router";
import {AffaireService} from "../../../services/affaire.service";
import {Article} from "../../../module/article";
import {ArticleService} from "../../../services/article.service";

@Component({
  selector: 'app-detail-affaire',
  templateUrl: './detail-affaire.component.html',
  styleUrls: ['./detail-affaire.component.css']
})
export class DetailAffaireComponent implements OnInit {
affaire:Affaire=new Affaire();
id!:number;
articles!:Article[];
  articlesFind!:Article[];
articleAffecter:Article=new Article();
pagearticle :number =0
  size:number=2;
  Valider: boolean=false;

  constructor(private articleService:ArticleService,private router: Router,private affaireService:AffaireService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.affaireService.getAffaireById(this.id).subscribe(value => {this.affaire=value;},error =>
      console.log(error));
    this.affaireService.getarticleAffaire(this.id).subscribe(value => {
      this.articles=value
    },error =>
      console.log(error));
    this.articleService.pageArticle(this.pagearticle,this.size).subscribe(value => this.articlesFind=value,error =>
      console.log(error));
  }
  OnUpdate() {
    this.affaireService.updateAffaire(this.affaire).subscribe(value => {
      this.reload();
    },error =>console.log(error))
  }
  reload(){
    this.router.navigate(["detail-affaire",this.id])
      .then(() => {
        window.location.reload();
      });
  }
  OnAffecter(ida:String){
    this.articleService.afftecterArticleToAffaire(this.id,ida,this.articleAffecter).subscribe(
      value => {
        this.reload();
      },error =>console.log(error)
    )
  }

  getAffecter(code: string) {
this.articleService.getArticleById(code).subscribe(value => {this.articleAffecter =value},
  error =>
    console.log(error));
console.log(this.articleAffecter);
  }

  getTopageArticle(pagearticle: number) {
    this.pagearticle=pagearticle;
    this.articleService.pageArticle(this.pagearticle,this.size).subscribe(value => this.articlesFind=value,error =>
      console.log(error));
  }



}
