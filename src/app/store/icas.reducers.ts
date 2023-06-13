import {Action, createReducer, on} from '@ngrx/store';
import * as icasActions from './icas.actions';
import { icasState } from './icas.state';


export const initialState: icasState = {
    isUserLoggedOn: false,
    loggedOnUser: {},
    staffs: [],
    departments: [],
    establishments: [],
    books: [],
    error: ''
}


export const icasReducer = createReducer(
    initialState,
    on(icasActions.addStaffsAction, (state, {staff}) => 
        (
            {
                ...state,
                staffs: [...state.staffs, staff ]
            }
        )
    ),
    on(icasActions.fetchDepartmentSuccess, (state, action) => 
        (
            {
                ...state,
                departments: action.data
            }
        )
    ),
    on(icasActions.fetchDepartmentFailure, (state, action) => 
        (
            {
                ...state,
                error: action.error
            }
        )
    ) ,
    on(icasActions.fetchEstablishmentsSuccess, (state, action) => 
        (
            {
                ...state,
                establishments: action.data
            }
        )
    ),
    on(icasActions.fetchEstablishmentsFailure, (state, action) => 
        (
            {
                ...state,
                error: action.error
            }
        )
    ),
    on(icasActions.fetchBooksSuccess, (state, action) => 
        (
            {
                ...state,
                books: action.data
            }
        )
    ),
    on(icasActions.fetchBooksFailure, (state, action) => 
        (
            {
                ...state,
                error: action.error
            }
        )
    ),
    on(icasActions.setUserLoggedOnFlag, (state, action) => 
        (
            {
                ...state,
                isUserLoggedOn: action.flag
            }
        )
    )  
)

export function reducer(state: icasState | undefined, action: Action): any {
    return icasReducer(state, action);
}

 