const { User, Pokemon } = require('../db');
const bcrypt = require('bcrypt');

const getUserInformation = async function (userId, userPassword) {

  //console.log("userId, userPassword:",userId, userPassword)
    
  try{
    const resp = await User.findByPk(userId,
      {/* attributes: {exclude: ['password']}, */ //I will first use the password in order to check if it's the correct one
      //and then delete it from the object...
      include: {model: Pokemon, attributes: ['id']}
    })

    //console.log(resp.dataValues.password) //at this point resp HAS password data
    let loginSuccessfull = false
    loginSuccessfull = bcrypt.compareSync(userPassword, resp.dataValues.password);
    

    const pokemonIdArray = []
    
    if (resp && loginSuccessfull){
        for (let i=0;i<resp.pokemons.length;i++) pokemonIdArray.push(resp.pokemons[i].id)
        delete resp.dataValues.pokemons
        delete resp.dataValues.password
        resp.dataValues.pokemons = [];
        for (let i=0;i<pokemonIdArray.length;i++)resp.dataValues.pokemons.push(pokemonIdArray[i])  
    }
    
    if (!resp) throw new Error("No User found with the provided ID...")

    if (loginSuccessfull) return resp.dataValues
    //else throw new Error("Login Failed")
    else return "login failed"

  }catch(unError){
    throw new Error(unError.message)
  }    
    
  }
    
module.exports = getUserInformation;
