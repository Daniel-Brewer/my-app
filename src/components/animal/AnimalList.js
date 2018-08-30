import React, { Component } from 'react'
import { Link } from "react-router-dom"
import dog from "./DogIcon.png"
import "./Animal.css"

export default class AnimalList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {animal.name}
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</button>
                            </h4>
                        </div>
                    </div>
                )
            }
            </section>
        </React.Fragment>
        )
    }
}

// import React, { Component } from "react"
// import "./Animal.css"
// import AnimalCard from "./AnimalCard"

// export default class AnimalList extends Component {
//     render () {
//         return (
//             <React.Fragment>
//                 <div className="animalButton">
//                     <button type="button"
//                             onClick={()=> this.props.history.push("/animals/new")}
//                             className="btn btn-success">
//                         Admit Animal
//                     </button>
//                 </div>
//                 <section className="animals">
//                 {
//                     this.props.animals.map(animal =>
//                         <AnimalCard key={animal.id} animal={animal} {...this.props} />
//                     )
//                 }
//                 </section>
//             </React.Fragment>
//         )
//     }
// }

