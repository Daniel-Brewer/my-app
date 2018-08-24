import React, { Component } from 'react'


export default class OwnerList extends Component {
    render() {
        return (
            <div className="owners">
            <h3>Animal Owners</h3>
                {
            this.props.owners.map(owner => 
                <div id={`owner--${owner.id}`} key={owner.id}>
                        {owner.name}
                        </div>
                    )
                }
                </div>
               
        )
    }
}