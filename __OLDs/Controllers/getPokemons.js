const { Pokemon } = require('../db');
const axios = require("axios");

//debo traer tanto los locales creados por mi como tamnbien los de la api externa
const getPokemons = async function () {
    
  try{
    const respLocal = await Pokemon.findAll()
    const respAPi = [];
    let totalArray = [];

    const fetchDataAsync = async () =>{
        //const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=39")
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=19")
        for (let i=0;i<response.data.results.length;i++){
          const onePokemonFullInfo = await axios.get(response.data.results[i].url)
          const onePokemonObj = {
            "id":onePokemonFullInfo.data.id,
            "name":response.data.results[i].name,
            "life":onePokemonFullInfo.data.stats[0].base_stat,
            "attack":onePokemonFullInfo.data.stats[1].base_stat,
            "defense":onePokemonFullInfo.data.stats[2].base_stat,
            "speed":onePokemonFullInfo.data.stats[5].base_stat,
            "height":onePokemonFullInfo.data.height,
            "weight":onePokemonFullInfo.data.weight,
            "image":onePokemonFullInfo.data.sprites.other.dream_world.front_default,
            "inLocalDB": false
          }
          respAPi.push(onePokemonObj);
        }
        totalArray = respLocal.concat(respAPi)
    };
    
    await fetchDataAsync();
    //console.log("y ahora:",totalArray)
    return totalArray;
    
    
  }catch(e){
    throw new Error("Error when trying to get Pokemons! Error:" + e.message)
    //throw new Error(e.message)
  }    
    
}
    
module.exports = getPokemons;