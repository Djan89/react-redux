import * as types from './actionTypes';
import EmployeeApi from '../api/mockEmployeeApi';

export function createEmployee(employee){
    return {type: types.CREATE_EMPLOYEE, employee};
}

export function updateEmployee(employee){
    return {type: types.UPDATE_EMPLOYEE, employee};
}

export function loadEmployeesSuccess(employees){
    return {type: types.LOAD_EMPLOYEES, employees};
}

export function deleteEmployeesSuccess(employee){
    return {type: types.DELETE_EMPLOYEE, employee};
}

export function loadEmployees() {
  return dispatch => {
    return EmployeeApi.getAllEmployees()
    .then(employees => dispatch(loadEmployeesSuccess(employees)))
    .catch(error => {
      throw(error);
    });
  };
}

export function saveEmployee(employee) {
  return (dispatch) => {
    return EmployeeApi.saveEmployee(employee)
    .then(savedEmployees => {
      employee.id ? dispatch(updateEmployee(savedEmployees)) : dispatch(updateEmployee(savedEmployees));
    })
    .catch(error => {
      throw(error);
    });
  };
}

export function deleteEmployee(employee) {
  return (dispatch) => {
    return EmployeeApi.deleteEmployee(employee.id)
    .then(savedEmployees => dispatch(deleteEmployee(employee)))
    .catch(error => {
      throw(error);
    });
  };
}