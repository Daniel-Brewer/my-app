import React, { Component } from 'react'


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
                            <h4>
                            <a href="#"
                                    onClick={() => this.props.deleteOwner(owner.id)}
                                    className="card-link">Delete</a>
                                    </h4>
                        </div>
                    )
                }
            </section>  
        )
    }
}