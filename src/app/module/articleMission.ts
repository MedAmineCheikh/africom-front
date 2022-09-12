export class ArticleMission {
  article!:          Article;
  id!:               string;
  quantite_Mission!: number;
  quantite_Utilise!: number;
  statut!:           string;
  work_order!:       WorkOrder;
}

export class Article {
  code!:                   string;
  designation!:            string;
  quantite_Contractuelle!: number;
  quantite_Realisee!:      number;
  statut!:                 string;
}

export class WorkOrder {
  debut_Previsionnel!:   Date;
  debut_Reel!:           Date;
  demandeur!:            string;
  employe!:              Employe;
  employeId!:            string;
  fichier!:              boolean;
  fin_Previsionnel!:     Date;
  fin_Reel!:             Date;
  frais_Mission!:        number;
  hebergement!:          number;
  id!:                   string;
  n_fiche_Intervention!: number;
  remarque!:             string;
  statut!:               string;
}

export class Employe {
  charge_Salariale!: Date;
  chef_Projet!:      boolean;
  matricule!:        string;
  n_Cin!:            string;
  n_Permis!:         string;
  prenom_Nom!:       string;
  statut!:           string;
}
