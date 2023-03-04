const { Pokemon } = require('../db');
const axios = require("axios");
const getPokemons = require("../controllers/getPokemons.js");

//debo traer tanto los locales creados por mi como tamnbien los de la api externa
const getPokemonByName = async function (name) {
    
  try{
    const allPokemons = await getPokemons();
    const filteredByName = allPokemons.filter(oneElement => oneElement.name.toUpperCase()===name.toUpperCase())//decidi hacerlo case insensitive de manera totalmente arbitraria
    //console.log("quedo solo este:",filteredByName[0])
    return filteredByName[0];//porque filter sigue siendo un metodo de array y por lo tanto devuelve un array
    
  }catch{
    throw new Error("Error when trying to get this Pokemon!")
  }    
    
}
    
module.exports = getPokemonByName;