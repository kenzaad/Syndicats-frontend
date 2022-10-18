import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cession} from "../model/cession.model";


@Injectable({
  providedIn: 'root'
})
export class CessionService {

  private _cession = new Cession();
  public isCreateFailed = false;
  public isCreateSucessed = false;
  public errorMessage: ' ';
  private _cessions = new Array<Cession>();
  private index: number;
   totalRecords: any;
  page: Number = 1;

  constructor(private http: HttpClient) { }

  get cession(): Cession {
    if (this._cession == null) {
      this._cession = new Cession();
    }

    return this._cession;
  }

  set cession(value: Cession) {
    this._cession = value;
  }

  get cessions(): Array<Cession> {
    if (this._cessions == null) {
      this._cessions = new Array<Cession>();
    }
    return this._cessions;
  }

  set cessions(value: Array<Cession>) {
    this._cessions = value;
  }


  private clone(cession: Cession) {
    const _clone=new Cession();
    _clone.id = cession.id;
    _clone.codeCession = cession.codeCession;
    _clone.coproprietaire.codeCoproprietaire = cession.coproprietaire.codeCoproprietaire;
    _clone.dateAcquisition = cession.dateAcquisition;
    _clone.dateVente = cession.dateVente;

    return _clone;
  }

  public getAll() {

    this.http.get<Array<Cession>>('http://localhost:8080/Cession/ListCession').subscribe(
      data => {
        this._cessions = data;
        this.totalRecords = data.length;
      },
      error => {
        console.log('erreur');

      }
      ,
    );


  }

  public delete(cession: Cession, index: number) {
    this.http.delete<void>('http://localhost:8080/Cession/deleteCession/' + cession).subscribe(
      data => {
        this.cessions.splice(index, 1);
      },
      error => {
        console.log('erreur');

      }, );


  }

  public save() {
    if (this.cession.id == null) {
      this.http.post<number>('http://localhost:8080/Cession/', this.cession).subscribe(
        data => {

            this.cessions.push(this.clone(this.cession));
            // @ts-ignore
            this.cession = null;
          this.isCreateFailed = false;
          this.isCreateSucessed = true;
          this.reloadPage();


        },
        error => {
             console.log("error tfou");
          this.errorMessage = error.error.message;
          this.isCreateFailed = true;
        },
      );
    }
  else {
      this.http.put<number>('http://localhost:8080/Cession/', this.cession).subscribe(
        data => {

            this.cessions[this.index] = this.clone(this.cession);
this.cession=null;
          this.isCreateFailed = false;
          this.isCreateSucessed = true;
          this.reloadPage();

        },
        error => {
          console.log('erreur');
          this.errorMessage = error.error.message;
          this.isCreateFailed = true;

        }
      );
    }
  }

  public edit(index:number,c: Cession)
  {
    this.cession=this.clone(c);
    this.index =index;
  }
  reloadPage() {
    window.location.reload();
  }
}
