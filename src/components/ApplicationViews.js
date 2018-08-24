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


    render() {
        return (
            <React.Fragment>
            <div className="viewArea">
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
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
// // bring in necessary components

// import { Route } from 'react-router-dom'
// import React, { Component } from "react"
// import AnimalList from './animal/AnimalList'
// import LocationList from './location/LocationList'
// import EmployeeList from './employee/EmployeeList'
// import OwnerList from './owner/OwnerList'
// import "./applicationView.css"

// // creating a database
// class ApplicationViews extends Component {
//     // employeesFromAPI = [
//     //     { id: 1, name: "Jessica Younker" },
//     //     { id: 2, name: "Jordan Nelson" },
//     //     { id: 3, name: "Zoe LeBlanc" },
//     //     { id: 4, name: "Blaise Roberts" }
//     // ]

//     // locationsFromAPI = [
//     //     { id: 1, name: "Nashville North", address: "500 Circle Way" },
//     //     { id: 2, name: "Nashville South", address: "10101 Binary Court" }
//     // ]

//     // animalsFromAPI = [
//     //     { id: 1, name: "Doodles" },
//     //     { id: 2, name: "Jack" },
//     //     { id: 3, name: "Angus" },
//     //     { id: 4, name: "Henley" },
//     //     { id: 5, name: "Derkins" },
//     //     { id: 6, name: "Checkers" }
//     // ]

//     // ownersFromAPI = [
//     //     { id: 1, name: "Teble" },
//     //     { id: 2, name: "Ryan" },
//     //     { id: 3, name: "Aaron" },
//     //     { id: 4, name: "Dan" },
//     //     { id: 5, name: "Calie" },
//     //     { id: 6, name: "Cleo" }
//     // ]

//     // declare state

//     state = {
//         data: {
//             locations: [],
//             animals: [],
//             employees: [],
//             owners: []
//         }
//     }
//     // state = {
//     //     employees: this.employeesFromAPI,
//     //     locations: this.locationsFromAPI,
//     //     animals: this.animalsFromAPI,
//     //     owners: this.ownersFromAPI
//     // }

// // render the fragment that will be shown

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="viewArea">
//                 <Route exact path="/" render={(props) => {
//                     return <LocationList locations={this.state.locations} />
//                 }} />
//                 <Route exact path="/animals" render={(props) => {
//                     return <AnimalList animals={this.state.animals} />
//                 }} />
//                 <Route exact path="/employees" render={(props) => {
//                     return <EmployeeList employees={this.state.employees} />
//                 }} />
//                 <Route exact path="/owners" render={(props) => {
//                     return <OwnerList owners={this.state.owners} />
//                 }} />
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default ApplicationViews
