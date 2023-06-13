import { createAction, props } from '@ngrx/store';
import { Department, Staff } from './icas.models';
import { ICASTypes } from './icas.types';

export const fetchStaffsAction = createAction('[Staffs] fetch all staffs');
export const staffsLoadedSuccessAction = createAction(
    '[Staffs] add new staff',
        (staff: Staff) => ({staff})
);
export const addStaffsAction = createAction(
    '[Staffs] add new staff',
        (staff: Staff) => ({staff})
);

export const fetchDepartments = createAction(ICASTypes.FETCH_DEPARTMENTS);

export const fetchDepartmentSuccess = createAction(
    ICASTypes.FETCH_DEPARTMENTS_SUCCESS,
    props<{data: any}>()
);

export const fetchDepartmentFailure = createAction(
    ICASTypes.FETCH_DEPARTMENTS_FAILURE,
    props<{error: string}>()
);

//================
//ESTABLISHMENTS
//================
export const fetchEstablishments = createAction(ICASTypes.FETCH_ESTABLISHMENTS);

export const fetchEstablishmentsSuccess = createAction(
    ICASTypes.FETCH_ESTABLISHMENTS_SUCCESS,
    props<{data: any}>()
);

export const fetchEstablishmentsFailure = createAction(
    ICASTypes.FETCH_ESTABLISHMENTS_FAILURE,
    props<{error: string}>()
);

//================
// LIBRARY
//================
export const fetchBooks = createAction(ICASTypes.FETCH_BOOKS);

export const fetchBooksSuccess = createAction(
    ICASTypes.FETCH_BOOKS_SUCCESS,
    props<{data: any}>()
);

export const fetchBooksFailure = createAction(
    ICASTypes.FETCH_BOOKS_FAILURE,
    props<{error: string}>()
);

export const setUserLoggedOnFlag = createAction(
    ICASTypes.SET_USER_LOGGED_ON,
    props<{flag: boolean}>()
);


