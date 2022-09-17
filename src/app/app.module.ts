import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ListEmployeComponent } from './components/employe/list-employe/list-employe.component';
import { UpdateEmployeComponent } from './components/employe/update-employe/update-employe.component';
import { AddEmployeComponent } from './components/employe/add-employe/add-employe.component';
import { AddQualificationComponent } from './components/qualification/add-qualification/add-qualification.component';
import { UpdateQualificationComponent } from './components/qualification/update-qualification/update-qualification.component';
import { ListQualificationComponent } from './components/qualification/list-qualification/list-qualification.component';
import { AddActiviteComponent } from './components/activite/add-activite/add-activite.component';
import { UpdateActiviteComponent } from './components/activite/update-activite/update-activite.component';
import { ListActiviteComponent } from './components/activite/list-activite/list-activite.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ListOrderComponent } from './components/work_order/list-order/list-order.component';
import { AddOrderComponent } from './components/work_order/add-order/add-order.component';
import { UpdateOrderComponent } from './components/work_order/update-order/update-order.component';
import { DetailOrderComponent } from './components/work_order/detail-order/detail-order.component';
import { ListAffaireComponent } from './components/affaire/list-affaire/list-affaire.component';
import { AddAffaireComponent } from './components/affaire/add-affaire/add-affaire.component';
import { UpdateAffaireComponent } from './components/affaire/update-affaire/update-affaire.component';
import { DetailAffaireComponent } from './components/affaire/detail-affaire/detail-affaire.component';
import { ListArticleComponent } from './components/article/list-article/list-article.component';
import { AddArticleComponent } from './components/article/add-article/add-article.component';
import { UpdateArticleComponent } from './components/article/update-article/update-article.component';
import { DetailArticleComponent } from './components/article/detail-article/detail-article.component';
import { DetailArticleMissionComponent } from './components/article_mission/detail-article-mission/detail-article-mission.component';
import { UpdateArticleMissionComponent } from './components/article_mission/update-article-mission/update-article-mission.component';
import { ListArticleMissionComponent } from './components/article_mission/list-article-mission/list-article-mission.component';
import { AddArticleMissionComponent } from './components/article_mission/add-article-mission/add-article-mission.component';
import { LoginComponent } from './components/login/login.component';
import { AffecterArticleComponent } from './components/affaire/affecter-article/affecter-article.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ListEmployeComponent,
    UpdateEmployeComponent,
    AddEmployeComponent,
    AddQualificationComponent,
    UpdateQualificationComponent,
    ListQualificationComponent,
    AddActiviteComponent,
    UpdateActiviteComponent,
    ListActiviteComponent,
    ListOrderComponent,
    AddOrderComponent,
    UpdateOrderComponent,
    DetailOrderComponent,
    ListAffaireComponent,
    AddAffaireComponent,
    UpdateAffaireComponent,
    DetailAffaireComponent,
    ListArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    DetailArticleComponent,
    DetailArticleMissionComponent,
    UpdateArticleMissionComponent,
    ListArticleMissionComponent,
    AddArticleMissionComponent,
    LoginComponent,
    AffecterArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
