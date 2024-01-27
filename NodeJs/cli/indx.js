#!/usr/bin/end node

const yargs = require('yargs');
const { argv } = yargs(process.argv)
console.log(process.argv)
const printFiveMoves = async(pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json()
    const moves = pokemon.moves.map(({ move }) => { move.name })
    console.log(moves.slice(0, 5))
};
printFiveMoves(argv.process);