import React, { Component } from "react"
import "./Employee.css"



export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        // const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
           <section className="employees">
                <h3>Employees</h3>
                {
                    this.props.employees.map(employee =>
                        <div id={`employee--${employee.id}`} key={employee.id}>
                            {employee.name}
                            <br></br>
                            <h4>
                                <button onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</button>
                            </h4>
                        </div>
                    )
                }
            </section>
        )
    }
}