import React, { Component } from 'react'
import "./Employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <div className="employees">
                <h3>Employees               {
                    this.props.employees.map(employee =>
                        <div id={`employee--${employee.id}`} key={employee.id}>
                            {employee.name}
                            <a href="http://localhost:3000/employees"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="employee-link">Delete</a>
                        </div>
                    )
                }
                </h3> 
            </div>

        )
    }
}
