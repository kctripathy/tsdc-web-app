import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EstbPopupAllComponent } from 'src/app/popup/estb-popup-all/estb-popup-all.component';
import { EstbPopupComponent } from 'src/app/popup/estb-popup/estb-popup.component';
import { AdminHelperService } from 'src/app/services/admin-helper.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() sourceTable: any;
  @Input() estbType: string = '';

  displayTable: any;

  constructor(
    private dialog: MatDialog,
    private adminHelper: AdminHelperService
    ) {}

  ngOnInit(): void {

    this.displayTable = this.sourceTable.filter((row:any) => row.EstbTypeCode === this.getEstbType(this.estbType))
  }


  getEstbType(eType: string) : string {
    let returnValue: string = 'N';
    switch(eType) {
      case 'Notice': returnValue = 'N'; break;
      default: returnValue = eType;
    }
    return returnValue;
  }

  getEstbTypeDesc(estbTypeCode: string) {
    return this.adminHelper.getEstbTypeDesc(estbTypeCode);
  }

  showDetails(estb: any) {
    const data = { estbTypeDescription: this.adminHelper.getEstbTypeDesc(estb.EstbTypeCode), record: estb };
    const config = this.adminHelper.configPopup(500, 400, data);
    this.dialog.open(EstbPopupComponent, config);
  }

  showAll(estbTypeCode: string) {
    const data = { estbTypeDescription: this.adminHelper.getEstbTypeDesc(estbTypeCode), record: this.displayTable };
    const config = this.adminHelper.configPopup(900, 600, data);
    this.dialog.open(EstbPopupAllComponent, config);
  }
}
