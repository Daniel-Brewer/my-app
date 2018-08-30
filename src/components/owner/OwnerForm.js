import React, { Component } from "react"
import "./Owner.css"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        ownerId:"",
        ownerName: "",
        ownerPhone:""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating owner object, and
        invoking the function reference passed from parent component
     */
    constructNewOwner = evt => {
        evt.preventDefault()
        if (this.state.ownerName === "") {
            window.alert("Please Enter owner's Name!")
        } else {
            const owner = {
                name: this.state.ownerName
            }
            // Create the owner and redirect user to owner list
            this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ownerName"
                               placeholder="owner name" />
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

// import React, { Component } from "react"
// import "./Owner.css"

// export default class OwnerForm extends Component {
//     // Set initial state
//     state = {
//         name: ""
//     }

//     // Update state whenever an input field is edited
//     handleFieldChange = evt => {
//         const stateToChange = {}
//         stateToChange[evt.target.id] = evt.target.value
//         this.setState(stateToChange)
//     }

//     /*
//         Local method for validation, creating animal object, and
//         invoking the function reference passed from parent component
//      */
//     constructNewOwner = evt => {
//         evt.preventDefault()
//         const Owner = {
//             name: this.state.name,
//         }
//         // Create the animal and redirect user to animal list
//         this.props.addOwner(Owner)
//         .then(() => this.props.history.push("/Owners"))
        
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <form className="OwnerForm">
//                     <div className="form-group">
//                         <label htmlFor="fullName">Full Name</label>
//                         <input type="text" required="true"
//                                className="form-control"
//                                onChange={this.handleFieldChange}
//                                id="name"
//                                placeholder="Owner name" />
//                     </div>


//                     <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
//                 </form>
//             </React.Fragment>
//         )
//     }
// }