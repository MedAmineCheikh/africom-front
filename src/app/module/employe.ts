
export class employe {
    matricule!: String;
    n_Cin!: String;
  prenom_Nom!: String;
  chef_Projet!: boolean;
  charge_Salariale!: Date;
    n_Permis!: String;
    statut: any;
  qualifications !: activite[];
}
export class activite {
  code!: String;
  designation!: String;
  statut: any;
  type_qualification: any;
  type_activite: any;
}
