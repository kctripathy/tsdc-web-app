import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material/dialog'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-estb-popup',
  templateUrl: './estb-popup.component.html',
  styleUrls: ['./estb-popup.component.css', '../popup-styles.css']
})
export class EstbPopupComponent {
 
  downloadPath: string = '';
  constructor(
    private dilogRef: MatDialogRef<EstbPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
      this.downloadPath = environment.downloadPath;
      console.log('data', data);
  }

  closeDialog() {
    this.dilogRef.close();
  }
}
