const { User } = require('../db');
require("dotenv").config();
const bcrypt = require('bcrypt');
const { CROSS_ACCESS_TOKEN } = process.env;


const updateUser = async function (data) {

    const { id, unopenedenvelopes, token, pokemons, password } = data    

    //Data Validation
    try{
      const findUser = await User.findByPk(id);
      if (findUser===null) throw new Error("Error: User Not Found within the DataBase.")  
    }catch(unError){
      throw new Error(unError.message)
    }

    if (unopenedenvelopes){
        if ((!Number.isSafeInteger(unopenedenvelopes)) || (unopenedenvelopes<0)){
          throw new Error("Error: unopenedenvelopes must be an integer equal or greater than 0.")
        }
    }

    //Minimum 6 and maximum 10 chars. At least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character:
    if (password){
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{6,10}$/u.test(password)){
          throw new Error("Error: Passwords must have a Minimum 6 and maximum 10 characters. At least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.")
        }
        const saltRounds = 10;
        const hash = bcrypt.hashSync(password, saltRounds);

        //console.log("hash:",hash) //Replacing the provided password for the new one hashed in order to store it on the DB.
        data.password = hash
    }

    if (token!==CROSS_ACCESS_TOKEN){
      throw new Error("Error: token validation did not pass.")
    }


      try{
        /* const updateEnvelopesData =  */await User.update(
          data,          
          {
            where: { id: id }
          }
          );

          const currentUser = await User.findByPk(id)
          await currentUser.addPokemons(pokemons)          

        return "User Updated OK"  

      }catch(unError){
        throw new Error(unError.message)
      }

  }
    
module.exports = updateUser;
