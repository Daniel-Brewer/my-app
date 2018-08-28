import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Owner.css"


export default class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="ownerButton">
                <button type="button" className="btn btn-success"
                    onClick={() => { this.props.history.push("/owners/new") }}>Add Owner</button>
            </div>
            <section className="owners">
                <h3>Owners</h3>
                {
                    this.props.owners.map(owner =>
                        <div id={`owner--${owner.id}`} key={owner.id}>
                            {owner.name}
                            <br></br>
                            <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                            <h4>
                                <button onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</button>
                            </h4>
                        </div>
                    )
                }
            </section>
        </React.Fragment>
        )
    }
}