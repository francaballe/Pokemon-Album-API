const server = require('./src/app.js');
const { conn, Pokemon, Type} = require('./src/db.js');
const axios = require("axios");


conn.sync().then(() => {
    server.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });


const respAPi = [];

const fetchDataAsync = async () =>{

  //Voy a ver como soluciono algo que no hice en un principio: crear la tabla relacion de pokemones y tipos...
  /* const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=1032&limit=1")
  
  for (let i=0;i<response.data.results.length;i++){
    const onePokemon = response.data.results[i].url
    const onePokemonId = onePokemon.split("/")[6]
    const onePokemonObj = await Pokemon.findByPk(onePokemonId);
    const newResponse = await axios.get(onePokemon)
    const typeId = []
    
    for (let j=0;j<newResponse.data.types.length;j++) typeId.push(newResponse.data.types[j].type.url.split("/")[6])
    
    onePokemonObj.setTypes(typeId);
  } */
  //console.log("termine...")
  
  
  //const newResponse = await axios.get(onePokemon)
  //console.log(newResponse.data.types[0].type.url.split("/"))

  //Ahora voy a llenar la tabla de tipos...
  /* const response = await axios.get("https://pokeapi.co/api/v2/type")
  
  for (let i=0;i<response.data.results.length;i++){
    const idArray = response.data.results[i].url.split("/")
    const oneType = {
      "id":parseInt(idArray[6]) ,
      "name":response.data.results[i].name,
    }
    respAPi.push(oneType);
  }

  await Type.bulkCreate(respAPi,{ignoreDuplicates:true}); */
  


  //Dejo todo inactivo porque ya llené mi BBDD y no necesito mas la API REST externa
  //const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=1278&limit=2")
  //const response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279")
  
  /* for (let i=0;i<response.data.results.length;i++){
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
      "stars":1
    }
    respAPi.push(onePokemonObj);
  } */
  
  //console.log("x:",respAPi.length)
  //console.log("final:",respAPi)
  //await Pokemon.bulkCreate(respAPi,{ignoreDuplicates:true});


};
 
fetchDataAsync();

});
