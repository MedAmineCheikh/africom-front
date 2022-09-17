import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../services/article.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Article} from "../../../module/article";

@Component({
  selector: 'app-affecter-article',
  templateUrl: './affecter-article.component.html',
  styleUrls: ['./affecter-article.component.css']
})
export class AffecterArticleComponent implements OnInit {
  pagearticle :number =0
  size:number=4;
  articlesFind!:Article[] | [];
  articleAffecter:Article=new Article();
  id!:number;
  constructor(private articleService:ArticleService,private router: Router,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.params['id'];
    this.articleService.pageArticle(this.pagearticle,this.size).subscribe(value => this.articlesFind=value,error =>
      console.log(error));

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
  reload(){
    this.router.navigate(["detail-affaire",this.id])
      .then(() => {
        window.location.reload();
      });}
}
