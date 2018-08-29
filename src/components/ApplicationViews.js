import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalManager from "../modules/AnimalManager"
import AnimalForm from "./animal/AnimalForm"
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationManager from "../modules/LocationManager"
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeManager from "../modules/EmployeeManager"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import OwnerManager from "../modules/OwnerManager"
import OwnerForm from "./owner/OwnerForm"
import "./applicationView.css"
import Login from './Login'

export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
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

    addAnimal = animal => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))

    addEmployee = employee => EmployeeManager.post(employee)
        .then(() => EmployeeManager.getAll())
        .then(employees => this.setState({
            employees: employees
        }))

    addOwner = owner => OwnerManager.post(owner)
        .then(() => OwnerManager.getAll())
        .then(owners => this.setState({
            owners: owners
        }))

    editAnimal = animal => AnimalManager.put(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))


    render() {
        return (
            <React.Fragment>
                <div className="viewArea">
                    <Route path="/login" component={Login} />
                    <Route exact path="/" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <LocationList locations={this.state.locations} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/locations/:locationId(\d+)" render={(props) => {
                        return <LocationDetail {...props} deleteLocation={this.deleteLocation} locations={this.state.locations} />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    {/* <Route exact path="/animals" render={(props) => {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    }} /> */}
                    <Route exact path="/animals" render={props => {
                        if (this.isAuthenticated()) {
                            return <AnimalList {...props} deleteAnimal={this.deleteAnimal}
                                animals={this.state.animals} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/animals/edit" render={(props) => {
                        return <AnimalForm {...props}
                            editAnimal={this.editAnimal}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/employees/new" render={(props) => {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee}
                            employees={this.state.employees} />
                    }} />

                    <Route exact path="/employees" render={props => {
                        if (this.isAuthenticated()) {
                            return <EmployeeList deleteEmployee={this.deleteEmployee} deleteAnimal={this.deleteAnimal}
                                animals={this.state.animals}
                                employees={this.state.employees} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                        return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route path="/owners/new" render={(props) => {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner}
                            owners={this.state.owners} />
                    }} />
                    {/* <Route exact path="/owners" render={(props) => {
                        return <OwnerList {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} /> */}
                    <Route exact path="/owners" render={props => {
                        if (this.isAuthenticated()) {
                            return <OwnerList {...props} deleteOwner={this.deleteOwner}
                                owners={this.state.owners} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/owners/:ownerId(\d+)" render={(props) => {
                        return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}

