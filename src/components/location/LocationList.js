import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import hospital from "./hospital.png";

export default class LocationList extends Component {
    render() {
        return (
            <div className="locations">
            <h3>Our Locations</h3>
                {
            this.props.locations.map(location => 
                <div id={`location--${location.id}`} key={location.id}>
                <img src={hospital} className="icon--hospital" />
                        {location.name}
                        {location.address}
                        <br></br>
                        <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                        </div>
                    )
                }
                </div>
               
        )
    }
}