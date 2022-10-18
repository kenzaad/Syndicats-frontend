import {Cession} from "./cession.model";

export class Coproprietaire {
  public  id:number;
  public  codeCoproprietaire:string;
  public  nomCopro:string;
  public  cin:string;
  public  teleFixe:string;
  public   gsm:number;
  public  email:string;
public cessions=new Array<Cession>();

}
