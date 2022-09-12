export class Affaire {
  articles!:                   Article[];
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
  statut!:                     string;
}

export class Article {
  code!:                   string;
  designation!:            string;
  quantite_Contractuelle!: number;
  quantite_Realisee!:      number;
  statut!:                 string;
}
