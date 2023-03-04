//const { Pokemon } = require('../db');
//const getPokemons = require("../controllers/getPokemons");

const randomizePokemonStars = async function () {


  //const totalPokemonNumber = [...Array(672).keys()] //este el tamaño del array CON IMAGENES
  //const totalPokemonNumber = [...Array(1279).keys()]
  /* const randomNums = []
  let i = totalPokemonNumber.length
  let j = 0;
  
  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      randomNums.push(totalPokemonNumber[j]);
      totalPokemonNumber.splice(j,1);
  } */
  
  /* const random323Numbers = randomNums.slice(0,323)      //a estos les pongo 1 estrella - 48% - 322.56 (323)
  const random181Numbers = randomNums.slice(323,504)    //a estos les pongo 2 estrellas - 27% - 181.44 (181)
  const random107Numbers = randomNums.slice(504,611)   //a estos les pongo 3 estrellas - 16% - 107.52 (107)
  const random54Numbers = randomNums.slice(611,665)  //a estos les pongo 4 estrellas - 8% - 53.76 (54)
  const random7Numbers = randomNums.slice(665,672)   //a estos les pongo 5 estrella - 1% - 6.72 (7)
  
  const respuesta = await getPokemons(); */
  //No necesito actualizar a 1 estrella....cuando ya le puse 1 a todo por defecto
  /* for (let i=0;i<random640Numbers.length;i++){
    respuesta[random640Numbers[i]].stars = 1
    let resp = await Pokemon.findByPk(respuesta[random640Numbers[i]].id)
    resp.update({stars : 1}) 
  } */
  /* for (let i=0;i<random181Numbers.length;i++){
    respuesta[random181Numbers[i]].stars = 2
    let resp = await Pokemon.findByPk(respuesta[random181Numbers[i]].id)
    resp.update({stars : 2}) 
  }
  for (let i=0;i<random107Numbers.length;i++){
    respuesta[random107Numbers[i]].stars = 3
    let resp = await Pokemon.findByPk(respuesta[random107Numbers[i]].id)
    resp.update({stars : 3}) 
  }
  for (let i=0;i<random54Numbers.length;i++){
    respuesta[random54Numbers[i]].stars = 4
    let resp = await Pokemon.findByPk(respuesta[random54Numbers[i]].id)
    resp.update({stars : 4}) 
  }
  for (let i=0;i<random7Numbers.length;i++){
    respuesta[random7Numbers[i]].stars = 5
    let resp = await Pokemon.findByPk(respuesta[random7Numbers[i]].id)
    resp.update({stars : 5}) 
  }
 */
}
    
module.exports = randomizePokemonStars;