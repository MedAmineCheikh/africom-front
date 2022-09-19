import {Affaire} from "./affaire";

class Employe {
}

export class WorkOrder {
  affaire!:              Affaire;
  debut_Previsionnel!:   Date;
  debut_Reel!:           Date;
  demandeur!:            string;
  employe!:              Employe;
  fichier!:              boolean;
  fin_Previsionnel!:     Date;
  fin_Reel!:             Date;
  frais_Mission!:        number;
  hebergement!:          number;
  id!:                   string;
  n_fiche_Intervention!: number;
  remarque!:             string;
  statut!:               any;
  totalPages!:                 number;

}

