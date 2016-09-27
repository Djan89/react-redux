import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';

const EmployeeForm = ({employee, onChange, onSave, loading, errors}) => {
  return (
    <div>
      <h1 className="well well-sm">Manage Employee</h1>
      <form>
        <TextInput name="sid" label="SID" value={employee.sid} onChange={onChange} error={errors.sid} />
        <TextInput name="name" label="Name" value={employee.name} onChange={onChange} error={errors.name} />
        <TextInput name="role" label="Role" value={employee.role} onChange={onChange} error={errors.role} />

        <input type="submit" className="btn btn-primary" disabled={loading} value={loading ? 'Saving' : 'Save'} onClick={onSave} />
      </form>
    </div>
  );
};

EmployeeForm.propTypes = {
  employee: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object
};

export default EmployeeForm;
