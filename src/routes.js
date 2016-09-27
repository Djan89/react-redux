import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import EmployeePage from './components/employee/EmployeePage';
import ManageEmployeePage from './components/employee/ManageEmployeePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="employees" component={EmployeePage} />
        <Route path="employee" component={ManageEmployeePage} />
        <Route path="employee/:id" component={ManageEmployeePage} />
        <Route path="deleteEmployee/:id" component={EmployeePage} />
        <Route path="about" component={AboutPage} />
    </Route>
);
