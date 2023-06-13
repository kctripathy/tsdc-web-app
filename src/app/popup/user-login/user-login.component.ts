import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material/dialog'
import { Store } from '@ngrx/store';
import { AdminHelperService } from 'src/app/services/admin-helper.service';
import { setUserLoggedOnFlag } from 'src/app/store/icas.actions';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css', '../popup-styles.css']
})
export class UserLoginComponent {
  
  loginForm!: FormGroup;
  errorMessage = '';

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private dilogRef: MatDialogRef<UserLoginComponent>,
    public adminHelper: AdminHelperService,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  loginUser() {
    this.errorMessage = '';
    let uName = this.loginForm.get('userName')?.value;
    let uPassword = this.loginForm.get('password')?.value;

     if (uName !== 'admin' && uPassword !='qazx') {
      this.errorMessage = 'Invalid Credentials';
      return;
    }

     

    const loggedOnUser = {
      userName: 'admin',
      userRole: 'Administrator'
    }
    this.adminHelper.saveData('loggedOnUser', JSON.stringify(loggedOnUser))
    this.store.dispatch(setUserLoggedOnFlag({flag: true}));
    this.dilogRef.close('login-success');
  }

  closeDialog() {
    this.dilogRef.close();
  }

  public isFormInvalid() {
    return !(this.loginForm.get('userName')?.valid && this.loginForm.get('password')?.valid)
    
  }
}
