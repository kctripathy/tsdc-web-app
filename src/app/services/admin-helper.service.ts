import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AdminHelperService {

  constructor() { }

  public configPopup(width: number, height?: number, data?: any) : MatDialogConfig {
    return {
        disableClose: true,
        width: `${width}px`,
        maxWidth: `${width}px`,
        height: height? `${height}px` : undefined,
        panelClass: 'custom-dialog-container',
        backdropClass: 'confirmation-dialog-backdrop',
        data
    }
  }

  getEstbTypeDesc(eType: string) {
    let returnValue: string = 'N';
    switch(eType) {
      case 'A': returnValue = 'AQAR'; break;
      case 'C': returnValue = 'Circular'; break;
      case 'D': returnValue = 'Download'; break;
      case 'I': returnValue = 'IQAC'; break;
      case 'M': returnValue = 'Minute of Meeting'; break;
      case 'N': returnValue = 'Notice'; break;
      case 'P': returnValue = 'Photo'; break;
      case 'R': returnValue = 'Recent Activity'; break;
      case 'S': returnValue = 'Syllabus'; break;
      case 'T': returnValue = 'Tender'; break;
      case 'V': returnValue = 'Video'; break;
      case 'W': returnValue = 'World Bank'; break;
      case 'Z': returnValue = 'NAAC'; break;

      case '1': returnValue = 'Article'; break;
      case '2': returnValue = 'Project Paper'; break;
      case '3': returnValue = 'Books'; break;
      case '4': returnValue = 'Award'; break;
      case '5': returnValue = 'Seminar Paper'; break;
      case '6': returnValue = 'Study Material'; break;
      case '7': returnValue = 'Literature'; break;
      case '8': returnValue = 'Staff Profile'; break;
      default: returnValue = eType;
    }
    return returnValue;
  }

  getFullForm(shortForm: string | null): string {
    let fullForm: string = '';
    switch(shortForm?.toUpperCase()) {
        case 'NAAC': fullForm='National Assessment and Accreditation Council'; break;
        case 'IQAC': fullForm='Internal Quality Assurance Cell'; break;
        case 'AQAR': fullForm='Annual Quality Assurance Report'; break;
        case 'UGC': fullForm='University Grants Commission'; break;
        case 'YRC': fullForm='Youth Red Cross'; break;
        case 'NSS': fullForm='National Service Scheme'; break;
        case 'NCC': fullForm='National Cadet Corps'; break;
        case 'PSHC': fullForm='Prevention of Sexual Harassment Cell'; break;
    }
    return fullForm;
  }

  public isLoggedIn() {
    const loggedOnUser = this.getData('loggedOnUser');
    if (loggedOnUser == null)
      return false;
    else 
      return true;

  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
