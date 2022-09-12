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
}

export class Affaire {
  bon_de_Commande!:            string;
  date_Cloture!:               Date;
  date_Debut!:                 Date;
  date_passage_Execution!:     Date;
  designation_Affaire!:        string;
  lieu_multiple_par_Mission!:  boolean;
  montant!:                    number;
  montant_Vente!:              number;
  montant_budgetaire_Matriel!: number;
  montant_budgetaire_Service!: number;
  n_Affiaire!:                 number;
  statut!:                     any;
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
