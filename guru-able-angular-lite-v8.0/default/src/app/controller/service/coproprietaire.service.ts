import { Injectable } from '@angular/core';
import {Coproprietaire} from "../model/coproprietaire.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoproprietaireService {

  private _copro = new Coproprietaire();

  private _copros = new Array<Coproprietaire>();
  private index: number;
   totalRecords: any;
  page: Number = 1

  constructor(private http: HttpClient) { }

  get copro(): Coproprietaire {
    if (this._copro == null) {
      this._copro = new Coproprietaire();
    }

    return this._copro;
  }

  set copro(value: Coproprietaire) {
    this._copro = value;
  }

  get copros(): Array<Coproprietaire> {
    if (this._copros == null) {
      this._copros = new Array<Coproprietaire>();
    }
    return this._copros;
  }

  set copros(value: Array<Coproprietaire>) {
    this._copros = value;
  }


  private clone(copro: Coproprietaire) {
    const _clone=new Coproprietaire();
    _clone.id = copro.id;
    _clone.codeCoproprietaire = copro.codeCoproprietaire;
    _clone.cin = copro.cin;
    _clone.nomCopro= copro.nomCopro;
    _clone.gsm=copro.gsm;
    _clone.email=copro.email;
    _clone.teleFixe=copro.teleFixe;
    return _clone;
  }

  public getAll() {

    this.http.get<Array<Coproprietaire>>('http://localhost:8080/Coproprietaire/ListCoprorietaire').subscribe(
      data => {
        this._copros = data;
        this.totalRecords = data.length;
      },
      error => {
        console.log('erreur');

      }
      ,
    );


  }

  public delete(copro: Coproprietaire, index: number) {
    this.http.delete<void>('http://localhost:8080/Coproprietaire/deleteCoproprietaire/' + copro).subscribe(
      data => {
        this.copros.splice(index, 1);
      },
      error => {
        console.log('erreur');

      }, );


  }

  public save() {
    if (this.copro.id == null) {
      this.http.post<number>('http://localhost:8080/Coproprietaire/', this.copro).subscribe(
        data => {
          if (data > 0) {
            this.copros.push(this.clone(this.copro));
            // @ts-ignore
            this.copro = null;

          }
        },
        error => {
             console.log("error tfou");
          /*this.errorMessage = error.error.message;
          this.isCreateFailed = true;*/
        },
      );
    }
  else {
      this.http.put<number>('http://localhost:8080/Coproprietaire/', this.copro).subscribe(
        data => {

          if (data > 0) {
            this.copros[this.index] = this.clone(this.copro);
this.copro=null;
          }
        },
        error => {
          console.log('erreur');

        }
      );
    }
  }

  public edit(index:number,c: Coproprietaire)
  {
    this.copro=this.clone(c);
    this.index =index;
  }

}
