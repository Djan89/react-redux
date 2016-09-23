import * as types from './actionTypes';

export function createEmployee(employee){
    return {type: types.CREATE_EMPLOYEE, employee};
}