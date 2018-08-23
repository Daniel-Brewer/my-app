import React, { Component } from 'react'


export default class AnimalList extends Component {
    render() {
        return (
            <div className="animals">
            <h3>Animals</h3>
                {
            this.props.animals.map(animal => 
                <div id={`animal--${animal.id}`} key={animal.id}>
                        {animal.name}
                        </div>
                    )
                }
                </div>
               
        )
    }
}