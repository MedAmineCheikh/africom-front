import {WorkOrder} from "./work_order";
import {Article} from "./article";

export class ArticleMission {
  article!:          Article;
  id!:               string;
  quantite_Mission!: number;
  quantite_Utilise!: number;
  statut!:           string;
  work_order!:       WorkOrder;
  totalPages!:                 number;

}




