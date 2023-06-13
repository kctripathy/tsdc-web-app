import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPopupComponent } from './header-popup/header-popup.component';
import { EstbPopupComponent } from './estb-popup/estb-popup.component';
import { EstbPopupAllComponent } from './estb-popup-all/estb-popup-all.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderPopupComponent,
    EstbPopupComponent,
    EstbPopupAllComponent,
    StaffDetailsComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PopupModule { }
