const { Router } = require('express');
const router = Router();
const getUserInformation = require("../controllers/getUserInformation");

router.get("/", async function (req,res){
    const { id } = req.query;
    if (id){
        try{
            const respuesta = await getUserInformation(id);
            //console.log(respuesta)
            res.send(respuesta);
        }catch(unError){
            res.status(400).send(unError.message);
        }  
    }
});     


module.exports = router;