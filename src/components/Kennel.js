import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from './location/LocationList';
import AnimalList from './animal/AnimalList';
import AnimalOwnerList from './animalOwner/AnimalOwnerList';
import './kennel.css'

export default class Kennel extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]
    animalsFromAPI = [
        { id: 1, name: "Labrador" },
        { id: 2, name: "Boxer" },
        { id: 3, name: "Husky" },
        { id: 4, name: "German Shepherd" },
        { id: 5, name: "Pomeranian" },
        { id: 6, name: "Dalmation" }
    ]
    animalOwnersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]
    
    OwnershipFromAPI = [
        { id: 1, name: "Ryan Tanay", animal: "Dalmation" },
        { id: 2, name: "Emma Beaton", animal: "Pomeranian" },
        { id: 3, name: "Dani Adkins", animal: "German Shepherd" },
        { id: 4, name: "Adam Oswalt", animal: "Husky" },
        { id: 5, name: "Fletcher Bangs", animal: "Boxer" },
        { id: 6, name: "Angela Lee", animal: "Labrador" }
    ]

    
    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    state = {
        animalOwners: this.animalOwnersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        ownership: this.ownershipFromAPI
    }


    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
                <AnimalOwnerList animalOwners={this.state.animalOwners} />
            </article>

        );
    }
}