import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';
import EmployeeForm from './EmployeeForm';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class ManageEmployeePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      employee: Object.assign({}, this.props.employee),
      errors: {}
    };

    this.updateEmployeeState = this.updateEmployeeState.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.employee.id != nextProps.employee.id) {
      this.setState({ employee: Object.assign({}, nextProps.employee) });
    }
  }

  updateEmployeeState(event) {
    const field = event.target.name;
    let employee = this.state.employee;
    employee[field] = event.target.value;
    return this.setState({ employee: employee });
  }

  saveEmployee(event) {
    event.preventDefault();
    this.props.actions.saveEmployee(this.state.employee);
    toastr.success("Employee Saved Successfully");
    browserHistory.push('/employees');
  }

  render() {
    return (<EmployeeForm
      employee={this.state.employee}
      onChange={this.updateEmployeeState}
      onSave={this.saveEmployee}
      errors={this.state.errors} />);
  }
}

ManageEmployeePage.propTypes = {
  employee: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getEmployeeById(employees, id) {
  let employee = employees.filter(emp => emp.id == id);
  if (employee.length) return employee[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const employeeId = ownProps.params.id;
  let employee = { sid: "", name: "", role: "" };

  if (employeeId && state.employees.length > 0) {
    employee = getEmployeeById(state.employees, employeeId);
  }
  return { employee: employee };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployeePage);
