import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import "./applicationView.css"

export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:8088/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:8088/employees")
                .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:8088/locations")
                .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:8088/owners")
                .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
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
                        return <EmployeeList employees={this.state.employees} />
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnerList owners={this.state.owners} />
                    }} />
                </div>
            </React.Fragment>
        )
    }
}

