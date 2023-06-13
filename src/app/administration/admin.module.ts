import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { EstablishmentComponent } from './establishment/establishment.component';
// import { ActionReducerMap, StoreModule } from '@ngrx/store';
// import { icasReducer } from '../store/icas.reducers';


// const reducers: ActionReducerMap<any> = {
//   icas: icasReducer
// }

@NgModule({
  declarations: [
    HomeComponent,
    UserComponent,
    EstablishmentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    //StoreModule.forRoot(reducers),
  ]
})
export class AdministrationModule { }
