import { Component, OnInit } from '@angular/core';

import {CessionService} from "../../../controller/service/cession.service";
import {Cession} from "../../../controller/model/cession.model";

@Component({
  selector: 'app-cessions-create',
  templateUrl: './cessions-create.component.html',
  styleUrls: ['./cessions-create.component.scss']
})
export class CessionsCreateComponent implements OnInit {

  constructor(private  cessionService: CessionService) { }

  ngOnInit() {
  }
  get cession(): Cession {
    return this.cessionService.cession;
  }
  save() {
    this.cessionService.save();
  }


}
