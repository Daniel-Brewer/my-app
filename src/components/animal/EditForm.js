editAnimal = evt => {
    evt.preventDefault()
        const animal = {
            name: this.state.animalName,
            breed: this.state.breed,
            employeeId: this.props.employees.find(e => e.name === this.state.employee).id,
        }

        // Edit the animal and redirect user to animal list
        this.props.editAnimal(animal).then(() => this.props.history.push("/animals"))
    }