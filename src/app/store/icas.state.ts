import { Department, Staff } from "./icas.models";

export const staffFeatureKey = 'staff';
export interface icasState {
    isUserLoggedOn: boolean;
    loggedOnUser: {},
    staffs: Staff[];
    departments: Department[],
    establishments: any,
    books: any[],
    error: string
}

