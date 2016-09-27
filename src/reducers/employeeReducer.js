import * as types from '../actions/actionTypes';

export default function employeeReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_EMPLOYEES:
            return action.employees;
        case types.CREATE_EMPLOYEE:
            return [...state, Object.assign({}, action.employee)];
        case types.UPDATE_EMPLOYEE:
            return [
                ...state.filter(employee => employee.id !== action.employee.id),
                Object.assign({}, action.employee)
            ];
        case types.DELETE_EMPLOYEE:
            return [...state.filter(employee => employee.id !== action.employee.id)];
        default:
            return state;
    }
}
