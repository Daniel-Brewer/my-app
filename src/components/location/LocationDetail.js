import React, { Component } from "react"
import "./Location.css"



export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        // const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

        return (
           <section className="locations">
                <h3>Locations</h3>
                {
                    this.props.locations.map(location =>
                        <div id={`location--${location.id}`} key={location.id}>
                            {location.name}
                            <br></br>
                            <h4>
                                <button onClick={() => this.props.deleteLocation(location.id)}
                                    className="card-link">Delete</button>
                            </h4>
                        </div>
                    )
                }
            </section>
        )
    }
}