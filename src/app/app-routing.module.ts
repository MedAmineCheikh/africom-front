import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEmployeComponent} from "./components/employe/list-employe/list-employe.component";
import {AddEmployeComponent} from "./components/employe/add-employe/add-employe.component";
import {UpdateEmployeComponent} from "./components/employe/update-employe/update-employe.component";
import {ListActiviteComponent} from "./components/activite/list-activite/list-activite.component";
import {UpdateActiviteComponent} from "./components/activite/update-activite/update-activite.component";
import {AddActiviteComponent} from "./components/activite/add-activite/add-activite.component";
import {AddQualificationComponent} from "./components/qualification/add-qualification/add-qualification.component";
import {
  UpdateQualificationComponent
} from "./components/qualification/update-qualification/update-qualification.component";
import {ListQualificationComponent} from "./components/qualification/list-qualification/list-qualification.component";
import {ListOrderComponent} from "./components/work_order/list-order/list-order.component";
import {AddOrderComponent} from "./components/work_order/add-order/add-order.component";
import {UpdateOrderComponent} from "./components/work_order/update-order/update-order.component";
import {UpdateAffaireComponent} from "./components/affaire/update-affaire/update-affaire.component";
import {DetailAffaireComponent} from "./components/affaire/detail-affaire/detail-affaire.component";
import {DetailOrderComponent} from "./components/work_order/detail-order/detail-order.component";
import {ListAffaireComponent} from "./components/affaire/list-affaire/list-affaire.component";
import {AddAffaireComponent} from "./components/affaire/add-affaire/add-affaire.component";
import {AddArticleComponent} from "./components/article/add-article/add-article.component";
import {ListArticleComponent} from "./components/article/list-article/list-article.component";
import {UpdateArticleComponent} from "./components/article/update-article/update-article.component";
import {DetailArticleComponent} from "./components/article/detail-article/detail-article.component";
import {
  DetailArticleMissionComponent
} from "./components/article_mission/detail-article-mission/detail-article-mission.component";
import {
  UpdateArticleMissionComponent
} from "./components/article_mission/update-article-mission/update-article-mission.component";
import {
  ListArticleMissionComponent
} from "./components/article_mission/list-article-mission/list-article-mission.component";
import {
  AddArticleMissionComponent
} from "./components/article_mission/add-article-mission/add-article-mission.component";
import {LoginComponent} from "./components/login/login.component";
import {AffecterArticleComponent} from "./components/affaire/affecter-article/affecter-article.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'list-employe', component: ListEmployeComponent},
  {path: 'add-employe', component: AddEmployeComponent},
  {path: "update-employe/:matricule", component: UpdateEmployeComponent},
  {path: 'list-activite', component: ListActiviteComponent},
  {path: 'update-activite/:code', component: UpdateActiviteComponent},
  {path: 'add-activite', component: AddActiviteComponent},
  {path: 'add-qualification', component: AddQualificationComponent},
  {path: 'update-qualification/:code', component: UpdateQualificationComponent},
  {path: 'list-qualification', component: ListQualificationComponent},
  {path: 'list-order', component: ListOrderComponent},
  {path: 'add-order', component: AddOrderComponent},
  {path: 'update-order/:id', component: UpdateOrderComponent},
  {path: 'detail-order/:id', component: DetailOrderComponent},
  {path: 'update-affaire/:id', component: UpdateAffaireComponent},
  {path: 'detail-affaire/:id', component: DetailAffaireComponent},
  {path: 'list-affaire', component: ListAffaireComponent},
  {path: 'add-affaire', component: AddAffaireComponent},
  {path: 'add-article', component: AddArticleComponent},
  {path: 'list-article', component: ListArticleComponent},
  {path: 'update-article/:id', component: UpdateArticleComponent},
  {path: 'detail-article/:id', component: DetailArticleComponent},
  {path: 'detail-articleMission/:id', component: DetailArticleMissionComponent},
  {path: 'update-articleMission/:id', component: UpdateArticleMissionComponent},
  {path: 'list-articleMission', component: ListArticleMissionComponent},
  {path: 'add-articleMission', component: AddArticleMissionComponent},
  {path: 'affecter-article', component: AffecterArticleComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
