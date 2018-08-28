import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class LocationList extends Component {
    render() {
        return (
            <div className="locations">
            <h3>Our Locations</h3>
                {
            this.props.locations.map(location => 
                <div id={`location--${location.id}`} key={location.id}>
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