const { User, Pokemon } = require('../db');

const getUserInformation = async function (userId) {
    
  try{
    const resp = await User.findByPk(userId,{include: {model: Pokemon, attributes: ['id']}});
    const pokemonIdArray = []
    //const resp = await User.findByPk(userId,{include: Pokemon});
    
    if (resp){
        for (let i=0;i<resp.pokemons.length;i++)pokemonIdArray.push(resp.pokemons[i].id)
        delete resp.dataValues.pokemons
        resp.dataValues.pokemons = [];
        for (let i=0;i<pokemonIdArray.length;i++)resp.dataValues.pokemons.push(pokemonIdArray[i])  
    }
    
    if (!resp) throw new Error("No User found with the provided ID...")
    //console.log("hola:",resp.dataValues)
    return resp.dataValues;
  }catch(unError){
    throw new Error(unError.message)
  }    
    
  }
    
module.exports = getUserInformation;
