import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import "./applicationView.css"
import AnimalManager from "./animal/AnimalManager"
import EmployeeManager from "./employee/EmployeeManager"
import OwnerManager from "./owner/OwnerManager"
import LocationManager from "./location/LocationManager"

export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })

        // fetch("http://localhost:8088/animals")
        //     .then(r => r.json())
        //     .then(animals => newState.animals = animals)
        //     .then(() => fetch("http://localhost:8088/employees")
        //         .then(r => r.json()))
        //     .then(employees => newState.employees = employees)
        //     .then(() => fetch("http://localhost:8088/locations")
        //         .then(r => r.json()))
        //     .then(locations => newState.locations = locations)
        //     .then(() => fetch("http://localhost:8088/owners")
        //         .then(r => r.json()))
        //     .then(owners => newState.owners = owners)
        //     .then(() => this.setState(newState))
    }

    deleteAnimal = id => {
        fetch(`http://localhost:8088/animals/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:8088/animals`))
            .then(e => e.json())
            .then(animals => this.setState({
                animals: animals
            }))
    }
    deleteEmployee = id => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:8088/employees`))
            .then(e => e.json())
            .then(employees => this.setState({
                employees: employees
            }))
    }
    deleteOwner = id => {
        fetch(`http://localhost:8088/owners/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:8088/owners`))
            .then(e => e.json())
            .then(owners => this.setState({
                owners: owners
            }))
    }


    render() {
        return (
            <React.Fragment>
                <div className="viewArea">
                    <Route exact path="/" render={(props) => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}

