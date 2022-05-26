export default class PokemonClient{
    // Constructor
    constructor(){
        this.API_BASE = 'https://pokeapi.co/api/v2/';
        this.SMOGON_API_BASE = 'https://www.smogon.com/dex/ss/pokem';
        }

    // Methods
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async getPokemon(pokemonID) {
        let pokemons = [];
        let count = 0;
            try {
                await Promise.all(pokemonID.map(async (id) => {
                    const response = await fetch(`${this.API_BASE}pokemon/${id}`);
                    const data = await response.json();
                    let abilityList = [];
                    data["types"].forEach(element => {
                        abilityList.push(`${this.capitalizeFirstLetter(element["type"]["name"])}`);
                    });
                    pokemons.push("Catch " + this.capitalizeFirstLetter(data.name) + "! (Types: " + abilityList.join("/") + ")");
                    count++;
                }))
            } catch (error) {
                pokemons.push("Could not find pokemon with ID of " + pokemonID[count]);
            }
        return pokemons;
    }

}

