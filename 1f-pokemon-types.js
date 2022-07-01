/*
1f: Pokemon types
Challenge: Write a function that takes an array of objects representing Pokémon, with string properties name and type, and returns a descriptive sentence about them and their type: "<name> is a <type in lowercase> type Pokémon.".
Example:
[{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]
-> ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."] 
*/

/**
 * Takes an array of objects representing Pokémon, with string properties name and type, 
 * and returns a descriptive sentence about them and their type: "<name> is a <type in lowercase> type Pokémon.".
 * @param {object[]} pokemonList - array of objects representing Pokémon with string properties name and type
 * @returns {strin[]} - array of strings describing the Pokémon from pokemonList
 */

function pokemonTypes(pokemonList) {
    return descriptionList;
}

console.log(`pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]) returns: `, pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]), `should return: ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."]`);
console.log(`pokemonTypes([]) returns: `, pokemonTypes([]), `should return: []`);