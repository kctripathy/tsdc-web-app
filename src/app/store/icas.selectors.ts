import {createFeatureSelector, createSelector} from '@ngrx/store';
import {icasState} from './icas.state';

export const selectDepartments = createSelector(
    createFeatureSelector('icas'),
    (state: icasState) => {
        return state.departments;
    }
);

export const selectEstablishments = createSelector(
    createFeatureSelector('icas'),
    (state: icasState) => {
        return state.establishments;
    }
);


export const selectSyllabus = createSelector(
    createFeatureSelector('icas'),
    (state: icasState) => {
        return state.establishments.filter((row: any)=> row.EstbTypeCode === 'S');
    }
);


export const selectPhotoGallery = createSelector(
    createFeatureSelector('icas'),
    (state: icasState) => {
        return state.establishments.filter((row: any)=> row.EstbTypeCode === 'I');
    }
);

export const selectLibraryBooks = createSelector(
    createFeatureSelector('icas'),
    (state: icasState) => {
        return state.books;
    }
);

export const selectError = createSelector(
    createFeatureSelector('icas'),
    (state: icasState) => {
        return state.error;
    }
);

export const selectPublications = createSelector(
    createFeatureSelector('icas'),
    (state: icasState) => {
        return state.establishments.filter((row: any)=> 
        row.EstbTypeCode === '1' ||
        row.EstbTypeCode === '2' ||
        row.EstbTypeCode === '3' ||
        row.EstbTypeCode === '4' ||
        row.EstbTypeCode === '5' ||
        row.EstbTypeCode === '6' ||
        row.EstbTypeCode === '7' ||
        row.EstbTypeCode === '7' ||
        row.EstbTypeCode === '9'
        );
    }
);

export const selectLoggedOnUserFlag = createSelector(
    createFeatureSelector('icas'),
    (state: icasState) => {
        return state.isUserLoggedOn;
    }
);

