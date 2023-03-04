const { Router } = require('express');
const router = Router();
const getTypes = require("../controllers/getTypes.js");

router.get("/", async function (req,res){
    
        try {
            const respuesta = await getTypes();
            res.send(respuesta);
        }catch(unError){
            res.status(400).send(unError.message);
        }   
    
});     


module.exports = router;