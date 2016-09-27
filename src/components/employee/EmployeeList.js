import React, {PropTypes}  from 'react';
import {Link} from 'react-router';

const EmployeeList = ({employees, onDelete}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>SID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => {
          return (
            <tr key={employee.sid}>
            <td><Link to={'/employee/' + employee.id}>{employee.sid}</Link></td>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td><button className="btn btn-danger" onClick={onDelete}>Delete</button></td>
          </tr>
        );})}
      </tbody>
    </table>
  );
};

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
  onDelete: PropTypes.func
};

export default EmployeeList;
