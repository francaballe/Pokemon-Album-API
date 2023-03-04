const { Pokemon, Type } = require('../db');
//const axios = require("axios");

//debo traer tanto los locales creados por mi como tamnbien los de la api externa
const createPokemon = async function (data) {

  //console.log("soy data:",data)
  const { name, life, attack, defense, speed, height, weight, image, types } = data;

  //Validación de datos...
  if ((typeof(name)!=="string") || ((typeof(name)==="string" && (!name.length)))){
    throw new Error("Error: Pokemon name should be of text type and not empty.")
  }

  if (typeof(image)!=="string") {
    throw new Error("Error: Pokemon image should be of text type.")
  }
  
  if (typeof(life)!=="number")
    throw new Error("Error: life should be an integer number and greater than 0.")
  else  //si efectivamente ES un numero
    if (!((life>0) && (Number.isInteger(life))))
      throw new Error("Error: life should be an integer number and greater than 0.")

  if (typeof(attack)!=="number")
    throw new Error("Error: attack should be an integer number and greater than 0.")
  else  //si efectivamente ES un numero
    if (!((attack>0) && (Number.isInteger(attack))))
      throw new Error("Error: attack should be an integer number and greater than 0.")

  if (typeof(defense)!=="number")
    throw new Error("Error: defense should be an integer number and greater than 0.")
  else  //si efectivamente ES un numero
    if (!((defense>0) && (Number.isInteger(defense))))
      throw new Error("Error: defense should be an integer number and greater than 0.")

  if (typeof(speed)!=="number")
    throw new Error("Error: speed should be an integer number and greater than 0.")
  else  //si efectivamente ES un numero
    if (!((speed>0) && (Number.isInteger(speed))))
      throw new Error("Error: speed should be an integer number and greater than 0.")

  if (typeof(height)!=="number")
    throw new Error("Error: height should be an integer number and greater than 0.")
  else  //si efectivamente ES un numero
    if (!((height>0) && (Number.isInteger(height))))
      throw new Error("Error: height should be an integer number and greater than 0.")

  if (typeof(weight)!=="number")
    throw new Error("Error: weight should be an integer number and greater than 0.")
  else  //si efectivamente ES un numero
    if (!((weight>0) && (Number.isInteger(weight))))
      throw new Error("Error: weight should be an integer number and greater than 0.")


  for (let i=0;i<types.length;i++){
    try{
      let resp = await Type.findByPk(types[i])
      if (!resp) throw new Error(`The type ${types[i]} was not found within the local DB!`)
    }
    catch(unError){
      throw new Error(unError.message)
    }
  } 

try{
  
  const newPokemon =  await Pokemon.create({ name, life, attack, defense, speed, height, image, weight });
  //console.log("Metodos:",newPokemon.__proto__)

  for (let i=0;i<types.length;i++){
    newPokemon.setTypes(types[i])//me resulto mucho mas sencillo que countries...tal vez esta era la forma correcta y solo 
    //esperaba 1 parametro: el id de tipo en este caso
  }
  
  return newPokemon;

} catch{
    throw new Error("Error when trying to create this Pokemon!")
}  
    
}
    
module.exports = createPokemon;
