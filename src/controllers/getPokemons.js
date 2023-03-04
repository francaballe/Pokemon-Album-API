const { Pokemon, Type } = require('../db');

const getPokemons = async function () {
    
  try{
    const resp = await Pokemon.findAll({include: Type})
    //console.log(resp)
    return resp;
  }catch(e){
    throw new Error("Error when trying to get Pokemons! Error:" + e.message)
  }    
    
}
    
module.exports = getPokemons;