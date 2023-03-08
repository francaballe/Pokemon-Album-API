const { User } = require('../db');
const bcrypt = require('bcrypt');

const createUser = async function (data) {

//console.log("soy data:",data)
const { id, name, lastname, password, picture } = data;
const saltRounds = 10;
const hash = bcrypt.hashSync(password, saltRounds);

  try{

    //FALTA TODA LA COMPROBACION DE ERRORES. EJEMPLO:
    console.log("hash:",hash)
    data.password = hash

    const newUser = await User.create(data);
    //return newUser;
    return "User Created OK"
    
  }catch(unError){
    throw new Error(unError.message)
  }

  }
    
module.exports = createUser;
