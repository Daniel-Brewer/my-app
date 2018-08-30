import React, { Component } from "react"
import "./Owner.css"
import person from "../employee/person.png"

export default class OwnerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId, 0)) || {}

        return (
            <section className="owner">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={person} className="icon--person" />
                            {owner.name}
                        </h4>
                        <h6 className="card-title">{owner.breed}</h6>
                        {/* <a
                            onClick={() => {
                                this.props.history.push("/owners/edit")}
                            }
                            className="card-link">Edit</a> */}
                        <button
                            onClick={() => this.props.deleteOwner(owner.id)
                                            .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}

// import React, { Component } from "react"
// import "./Owner.css"



// export default class OwnerDetail extends Component {
//     render() {
//         /*
//             Using the route parameter, find the animal that the
//             user clicked on by looking at the `this.props.animals`
//             collection that was passed down from ApplicationViews
//         */
//         const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

//         return (
//            <section className="owners">
//                 <h3>Animal Owners</h3>
//                 {
//                     this.props.owners.map(owner =>
//                         <div id={`owner--${owner.id}`} key={owner.id}>
//                             {owner.name}
//                             <br></br>
//                             <h4>
//                                 <button onClick={() => this.props.deleteOwner(owner.id)}
//                                     className="card-link">Delete</button>
//                             </h4>
//                         </div>
//                     )
//                 }
//             </section>
//         )
//     }
// }