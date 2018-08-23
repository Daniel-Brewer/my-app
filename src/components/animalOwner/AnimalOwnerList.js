import React, { Component } from 'react'


export default class AnimalOwnerList extends Component {
    render() {
        return (
            <div className="animalOwners">
            <h3>Animal Owners</h3>
                {
            this.props.animalOwners.map(animalOwner => 
                <div id={`animalOwner--${animalOwner.id}`} key={animalOwner.id}>
                        {animalOwner.name}
                        </div>
                    )
                }
                </div>
               
        )
    }
}