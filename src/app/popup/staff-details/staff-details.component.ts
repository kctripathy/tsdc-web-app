import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css', '../popup-styles.css']
})
export class StaffDetailsComponent {

  constructor(
    private dilogRef: MatDialogRef<StaffDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}


  closeDialog() {
    this.dilogRef.close();
  }

}
