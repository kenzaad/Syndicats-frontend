import {Coproprietaire} from "./coproprietaire.model";


export class Cession {
  public  id:number;
  public  codeCession:string;
  public  dateAcquisition:string;
  public  dateVente:string;
  public  coproprietaire= new Coproprietaire();
}
