import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../module/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  host = "http://localhost:8088/";
  constructor(private http: HttpClient) { }
  public getArticleById(id:string):Observable<any>{
    return this.http.get<any>(this.host+"article/"+id);
  }
  public getAllArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.host+"articles");
  }
  public addArticle(a:Article):Observable<Object>{
    return this.http.post(this.host+"savearticle",a)
  }
  public updateArticle(a:Article):Observable<Article>{
    return this.http.put<Article>(this.host+"update-article/",a);
  }
  public afftecterArticleToAffaire(id:number,ida:String,a:Article){
  return this.http.put(this.host+"affecterAffaireToArticle/"+id+"/"+ida,a);
  }
  public searchArticle(kw:String):Observable<Article[]>{
    return this.http.get<Article[]>(this.host+"searcharticles?Keyword="+kw);
  }
  public pageArticle(kw:String,pagearticle:number,size:number):Observable<Article[]>{
    return this.http.get<Article[]>(this.host+"searcharticle?Keyword="+kw+"&page="+pagearticle+"&size="+size);
  }
}
