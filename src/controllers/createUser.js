const { User } = require('../db');
const bcrypt = require('bcrypt');

const createUser = async function (data) {

//console.log("soy data:",data)
const { id, name, lastname, password, picture } = data;


//Data Validation
try{
  const findUser = await User.findByPk(id);
  if (findUser!==null) throw new Error("Error: User already exists")
}catch(unError){
  throw new Error(unError.message)
}

if ((typeof(name)!=="string") || (!name.length)){
  throw new Error("Error: The provided name should be of text type and not empty.")
}

if ((typeof(lastname)!=="string") || (!lastname.length)){
  throw new Error("Error: The provided lastname should be of text type and not empty.")
}

if (picture && typeof(picture)!=="string"){
  throw new Error("Error: There was an error when trying to upload your picture.")
}

//Minimum 6 and maximum 10 chars. At least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character:
if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{6,10}$/u.test(password)){
  throw new Error("Error: Passwords must have a Minimum 6 and maximum 10 characters. At least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.")
}

const saltRounds = 10;
const hash = bcrypt.hashSync(password, saltRounds);

  try{
    //console.log("hash:",hash) //Replacing the provided password for the new one hashed in order to store it on the DB.
    data.password = hash

    const newUser = await User.create(data);
    //return newUser;
    return "User Created OK"
    
  }catch(unError){
    throw new Error(unError.message)
  }

  }
    
module.exports = createUser;
