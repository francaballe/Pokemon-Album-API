const { Type } = require('../db');

const getTypes = async function () {
    
  try{
    const resp = await Type.findAll()
    //console.log(resp)
    return resp;
  }catch{
    throw new Error("Error when trying to get Pokemon Types fron local DB!")
  }    
    
  }
    
module.exports = getTypes;