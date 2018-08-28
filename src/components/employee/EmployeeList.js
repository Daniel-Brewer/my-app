import React, { Component } from 'react'
import "./Employee.css"
import { Link } from 'react-router-dom'

export default class EmployeeList extends Component {
    render() {
        return (

            <React.Fragment>
                <div className="employeeButton">
                    <button type="button" className="btn btn-success"
                        onClick={() => { this.props.history.push("/employees/new") }}>Add Employee</button>
                </div>
                <section className="employees">
                    <h3>Employees</h3>
                    {
                        this.props.employees.map(employee =>
                            <div id={`employee--${employee.id}`} key={employee.id}>
                                {employee.name}
                                <br></br>
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <h4>
                                    <button onClick={() => this.props.deleteEmployee(employee.id)}
                                        className="card-link">Delete</button>
                                </h4>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

