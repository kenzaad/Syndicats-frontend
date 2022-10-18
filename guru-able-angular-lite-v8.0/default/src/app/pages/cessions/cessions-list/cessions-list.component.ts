import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CessionService} from "../../../controller/service/cession.service";
import {Cession} from "../../../controller/model/cession.model";
import {CessionsCreateComponent} from "../cessions-create/cessions-create.component";
import {CoproprietaireService} from "../../../controller/service/coproprietaire.service";



@Component({
  selector: 'app-cessions-list',
  templateUrl: './cessions-list.component.html',
  styleUrls: ['./cessions-list.component.scss']
})
export class CessionsListComponent implements OnInit {

  constructor(private  cessionService: CessionService,private  dialog : MatDialog,private  coproService:CoproprietaireService) { }


  ngOnInit() {
    this.cessionService.getAll();
console.log(this.cession.coproprietaire);
  }
  get cession(): Cession {
    return this.cessionService.cession;
  }

  get cessions(): Array<Cession> {
    return this.cessionService.cessions;
  }

  delete(cession: Cession,index: number) {
    const conf = confirm("Etes vous sûre de vouloir supprimer cette cession?");
    if(!conf) return;
    this.cessionService.delete(cession, index);

  }
  addcession() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "40%";
    dialogconfig.height = "60%";



    this.dialog.open(CessionsCreateComponent, dialogconfig);
  }

  public update(index: number, c: Cession) {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.disableClose = true;
    dialogconfig.autoFocus = true;
    dialogconfig.width = "40%";
    dialogconfig.height = "60%";
    this.dialog.open(CessionsCreateComponent, dialogconfig);
    this.cessionService.edit(index, c);


  }
}
