import React from 'react'
import Pets, { getAll } from '../data/pets'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  onAdoptPet = pId => {
    const pets = this.state.pets.map(pet => {
      return pet.id === pId ? { ...pet, isAdopted: true } : pet
    });
    this.setState({ pets: pets });
  }

  fetchPets = () => {
    let petLink = '/api/pets'
    if (this.state.filters.type !== "all") {
      petLink += `?type=${this.state.filters.type}`
    }

    fetch(petLink)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }))
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
