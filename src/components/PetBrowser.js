import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    const petCollection = this.props.pets.map(pet =>
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    )
    return <div className="ui cards">
      {petCollection}
    </div>
  }
}

export default PetBrowser
