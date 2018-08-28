import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h3>Animal Owners</h3>
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
        )
    }
}