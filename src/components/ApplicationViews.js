import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import AnimalList from './animal/AnimalList'
import AnimalForm from "./animal/AnimalForm"
import AnimalEditForm from './animal/AnimalEditForm'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from "./employee/EmployeeForm"
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerList from './owner/OwnerList'
import OwnerForm from "./owner/OwnerForm"
import OwnerDetail from './owner/OwnerDetail'
import APIManager from '../modules/APIManager'
import "./applicationView.css"
import Login from './Login'

// check for login
class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    state = {
        animals: [],
        locations: [],
        employees: [],
        owners: [],

    }
    componentDidMount() {
        const _state = {}
        APIManager.all("animals").then(animals => _state.animals = animals)
            .then(() => APIManager.all("employees").then(employees => _state.employees = employees))
            .then(() => APIManager.all("locations").then(locations => _state.locations = locations))
            .then(() => APIManager.all("owners").then(owners => _state.owners = owners))
            .then(() => { this.setState(_state) })
    }

    deleteAnimal = id => APIManager.delete("animals", id)
        .then(animals => this.setState({
            animals: animals
        }))

    addAnimal = animal => APIManager.add("animals", animal)
        .then(animals => this.setState({
            animals: animals
        }))
    editAnimal = (id, animal) => APIManager.edit("animals", id, animal)
        .then(animals => this.setState({
            animals: animals
        }))
    deleteEmployee = id => APIManager.delete("employees", id)
        .then(employees => this.setState({
            employees: employees
        }))

    addEmployee = employee => APIManager.add("employees", employee)
        .then(employees => this.setState({
            employees: employees
        }))
    deleteOwner = id => APIManager.delete("owners", id)
        .then(owners => this.setState({
            owners: owners
        }))

    addOwner = owner => APIManager.add("owners", owner)
        .then(owners => this.setState({
            owners: owners
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
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    }} />
                    <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees}
                            owners={this.state.owners} />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals}
                            editAnimal={this.editAnimal} />
                    }} />
                    <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                        return <AnimalEditForm {...props}
                            animals={this.state.animals}
                            employees={this.state.employees}
                            owners={this.state.owners}
                            editAnimal={this.editAnimal} />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList {...props}
                            deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/employees/new" render={(props) => {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                        return <EmployeeDetail {...props}
                            deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees}
                            editEmployee={this.editEmployee} />
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnerList {...props}
                            deleteOwner={this.deleteOwner}
                            owners={this.state.owners} />
                    }} />
                    <Route path="/owners/new" render={(props) => {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner}
                            owners={this.state.owners} />
                    }} />
                    <Route path="/owners/:ownerId(\d+)" render={(props) => {
                        return <OwnerDetail {...props}
                            deleteOwner={this.deleteOwner}
                            owners={this.state.owners}
                            editOwner={this.editOwner} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}
export default ApplicationViews


