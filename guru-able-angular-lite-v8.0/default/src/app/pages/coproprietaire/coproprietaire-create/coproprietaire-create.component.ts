import { Component, OnInit } from '@angular/core';
import {Coproprietaire} from "../../../controller/model/coproprietaire.model";
import {CoproprietaireService} from "../../../controller/service/coproprietaire.service";

@Component({
  selector: 'app-coproprietaire-create',
  templateUrl: './coproprietaire-create.component.html',
  styleUrls: ['./coproprietaire-create.component.scss']
})
export class CoproprietaireCreateComponent implements OnInit {

  constructor(private  coproService: CoproprietaireService) { }

  ngOnInit() {
  }
  get copro(): Coproprietaire {
    return this.coproService.copro;
  }
save() {
  this.coproService.save();
}
}
