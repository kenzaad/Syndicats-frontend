import { Component, OnInit } from '@angular/core';
import {CoproprietaireService} from "../../../controller/service/coproprietaire.service";
import {Coproprietaire} from "../../../controller/model/coproprietaire.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CoproprietaireCreateComponent} from "../coproprietaire-create/coproprietaire-create.component";


@Component({
  selector: 'app-coproprietaire-list',
  templateUrl: './coproprietaire-list.component.html',
  styleUrls: ['./coproprietaire-list.component.scss']
})
export class CoproprietaireListComponent implements OnInit {

  constructor(private  coproService: CoproprietaireService,private  dialog : MatDialog) { }


  ngOnInit() {
    this.coproService.getAll();
  }
  get copro(): Coproprietaire {
    return this.coproService.copro;
  }

  get copros(): Array<Coproprietaire> {
    return this.coproService.copros;
  }

  delete(copro:Coproprietaire,index: number) {
    const conf = confirm("Are you sure you want to delete this?");
    if(!conf) return;
    this.coproService.delete(copro, index);

  }
  addCopro() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "50%";
    dialogconfig.height = "70%";



    this.dialog.open(CoproprietaireCreateComponent, dialogconfig);
  }

  public update(index: number, c: Coproprietaire) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "50%";
    dialogconfig.height = "70%";
    this.dialog.open(CoproprietaireCreateComponent, dialogconfig);
   this.coproService.edit(index, c);


  }
}
