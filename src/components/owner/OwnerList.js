import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Owner.css"
import person from "../employee/person.png";

class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ownerButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/owners/new")}
                            }>
                        Add New Owner
                    </button>
                </div>
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <img src={person} alt="person" className="icon--person" />
                                {owner.name}
                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                <button
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        </React.Fragment>
        )
    }
}

export default OwnerList
