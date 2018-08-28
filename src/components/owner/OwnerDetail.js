import React, { Component } from "react"
import "./Owner.css"



export default class OwnerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
           <section className="owners">
                <h3>Animal Owners</h3>
                {
                    this.props.owners.map(owner =>
                        <div id={`owner--${owner.id}`} key={owner.id}>
                            {owner.name}
                            <br></br>
                            <h4>
                                <button onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</button>
                            </h4>
                        </div>
                    )
                }
            </section>
        )
    }
}