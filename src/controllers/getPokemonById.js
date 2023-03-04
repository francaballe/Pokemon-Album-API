const { Pokemon,Type } = require('../db');

const getPokemonById = async function (pokemonId) {
    
  try{
    const resp = await Pokemon.findByPk(pokemonId,{include: Type});
    if (!resp) throw new Error("No Pokemon found with the provided ID...")
    //console.log(resp.dataValues)
    return resp;
  }catch(unError){
    throw new Error(unError.message)
  }    
    
  }
    
module.exports = getPokemonById;
