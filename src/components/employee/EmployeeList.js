import React, { Component } from 'react'
import "./Employee.css"

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h3>Employees</h3>
                {
                    this.props.employees.map(employee =>
                        <div id={`employee--${employee.id}`} key={employee.id}>
                            {employee.name}
                            <br></br>
                            <h4>
                            <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                                    </h4>
                        </div>
                    )
                }
            </section>
        )
    }
}

