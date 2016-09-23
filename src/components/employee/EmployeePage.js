import React, {PropTypes}  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as employeeActions from '../../actions/employeeActions';

class EmployeePage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            employee: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onTitleChange(event){
        const employee = this.state.employee;
        employee.title = event.target.value;
        this.setState({employee: employee});
    }

    onSave(event){
        event.preventDefault();
        this.props.actions.createEmployee(this.state.employee);
    }

    employeeRow(employee, index){
        return <div key={index}>{employee.title}</div>;
    }

    render(){
        return (
            <div>
                <h1 className="well well-sm">Employees</h1>
                {this.props.employees.map(this.employeeRow)}
                <h2>Add Employee</h2>
                <form className="form-inline">
                    <div className="input-group">
                          <input type="text" className="form-control" placeholder="Insert Title"
                          value={this.state.employee.title} onChange={this.onTitleChange} />
                          <span className="input-group-btn">
                            <input type="submit" className="btn btn-default" onClick={this.onSave} value="Save" />
                          </span>
                    </div>
                </form>
            </div>
         );
    }
}

EmployeePage.propTypes={
    employees: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {employees: state.employees};
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(employeeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);

