const { User } = require('../db');
require("dotenv").config();
const { CROSS_ACCESS_TOKEN } = process.env;


const updateUser = async function (data) {

    const { id, unopenedenvelopes, token } = data

    //Data Validation
    try{
      const findUser = await User.findByPk(id);
      if (findUser===null) throw new Error("Error: User Not Found within the DataBase.")  
    }catch(unError){
      throw new Error(unError.message)
    }

    if ((!Number.isSafeInteger(unopenedenvelopes)) || (unopenedenvelopes<0)){
      throw new Error("Error: unopenedenvelopes must be an integer equal or greater than 0.")
    }

    if (token!==CROSS_ACCESS_TOKEN){
      throw new Error("Error: token validation did not pass.")
    }
    
      try{
        const updateEnvelopesData = await User.update(
          {
            unopenedenvelopes: unopenedenvelopes
          },
          {
            where: { id: id }
          }
          );
        return "User Updated OK"  

      }catch(unError){
        throw new Error(unError.message)
      }

  }
    
module.exports = updateUser;
