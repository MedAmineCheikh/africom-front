import {activite} from "./Activite";

export class employe {
    matricule!: String;
    n_Cin!: String;
  prenom_Nom!: String;
  chef_Projet!: boolean;
  charge_Salariale!: Date;
    n_Permis!: String;
    statut: any;
  qualifications !: activite[];
  totalPages!:                 number;

}

