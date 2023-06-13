import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdminHelperService } from 'src/app/services/admin-helper.service';
import { environment } from 'src/environments/environment.development';
import { EstbPopupComponent } from '../estb-popup/estb-popup.component';

@Component({
  selector: 'app-estb-popup-all',
  templateUrl: './estb-popup-all.component.html',
  styleUrls: ['./estb-popup-all.component.css', '../popup-styles.css']
})
export class EstbPopupAllComponent {
  downloadPath: string = '';
  constructor(
    private dialog: MatDialog,
    private adminHelper: AdminHelperService,
    private dilogRef: MatDialogRef<EstbPopupAllComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
      this.downloadPath = environment.downloadPath;
  }

  closeDialog() {
    this.dilogRef.close();
  }

  showPopup(estb: any) {
    console.log(estb);
    const data = { estbTypeDescription: this.adminHelper.getEstbTypeDesc(estb.EstbTypeCode), record: estb };
    const config = this.adminHelper.configPopup(500, 400, data);
    this.dialog.open(EstbPopupComponent, config);
  }
}
