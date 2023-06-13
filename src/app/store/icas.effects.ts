import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { StaffService } from '../services/staff.service';
import { EstablishmentService } from '../services/establishment.service';

import { fetchBooks, fetchBooksFailure, fetchBooksSuccess, fetchDepartmentFailure, fetchDepartmentSuccess, fetchDepartments, fetchEstablishments, fetchEstablishmentsFailure, fetchEstablishmentsSuccess, fetchStaffsAction } from './icas.actions';
import { LibraryService } from '../services/library.service';
 
@Injectable()
export class ICASEffects {

  constructor(
    private actions$: Actions,
    private establishmentService: EstablishmentService,
    private staffService: StaffService,
    public libraryService: LibraryService
  ) {}
 
  loadEstablishments$ = createEffect(() => this.actions$.pipe(
    ofType(fetchEstablishments),
    exhaustMap(() => this.establishmentService.GetEstablishments()
      .pipe(
        map(establishments => (
            fetchEstablishmentsSuccess({data: establishments})
        )),
        catchError((errorMessage) => {
            fetchEstablishmentsFailure({error: errorMessage})
            return EMPTY
        })
      ))
    )
  );

  loadStaffs$ = createEffect(() => this.actions$.pipe(
    ofType(fetchStaffsAction),
    exhaustMap(() => this.staffService.getStaffs()
      .pipe(
        map(staffs => ({ type: '[Staff] staffs loaded success', payload: staffs })),
        catchError(() => EMPTY)
      ))
    )
  );

  loadDepartments$ = createEffect(() => this.actions$.pipe(
    ofType(fetchDepartments),
    exhaustMap(() => this.staffService.getDepartments()
      .pipe(
        map(departments => (
            fetchDepartmentSuccess({data: departments})
        )),
        catchError((errorMessage) => {
            fetchDepartmentFailure({error: errorMessage})
            return EMPTY
        })
      ))
    )
  );
 
  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(fetchBooks),
    exhaustMap(() => this.libraryService.getBooks()
      .pipe(
        map(books => (
            fetchBooksSuccess({data: books})
        )),
        catchError((errorMessage) => {
            fetchBooksFailure({error: errorMessage})
            return EMPTY
        })
      ))
    )
  );
  
}