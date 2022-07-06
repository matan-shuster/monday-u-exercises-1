// The Pokemon Client (using axios) goes here

// import axios from 'axios';

const axios = require('axios')

class PokemonClient {
  // Constructor
  constructor() {
    this.API_BASE = 'https://pokeapi.co/api/v2/'
  }

  // Methods
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  async getPokemons(pokemonIDArray) {
    let pokemons = []
    let count = 0
    try {
      await Promise.all(
        pokemonIDArray.map(async (id) => {
          const response = await axios.get(`${this.API_BASE}pokemon/${id}`)
          const data = await response.data
          const abilityList = []
          data['types'].forEach((element) => {
            abilityList.push(
              this.capitalizeFirstLetter(element['type']['name'])
            )
          })
          pokemons.push(
            `Catch ${this.capitalizeFirstLetter(
              data.name
            )}! (Types: ${abilityList.join('/')})`
          )
          count++
        })
      )
    } catch (error) {
      console.error(error)
      pokemons.push(
        'Could not find pokemon with ID of ' + pokemonIDArray[count]
      )
    }
    return pokemons
  }
}

module.exports = PokemonClient
