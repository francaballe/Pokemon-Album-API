const getPokemons = require("../controllers/getPokemons.js");

//debo traer tanto los locales creados por mi como tambien los de la api externa
const getPokemonById = async function (id) {
    
  try{
    const allPokemons = await getPokemons();
    const filteredById = allPokemons.filter(oneElement => oneElement.id===parseInt(id))
    //console.log("quedo solo este:",filteredById[0])
    return filteredById[0];//porque filter sigue siendo un metodo de array y por lo tanto devuelve un array
    
  }catch{
    throw new Error("Error when trying to get this Pokemon!")
  }    
    
}
    
module.exports = getPokemonById;