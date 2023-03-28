const { Router } = require("express");
const router = Router();
const purchaseProduct = require("../controllers/purchaseProduct")


router.post("/", async function (req, res){
        
  try{
    let respuesta = await purchaseProduct(req.body);    
    res.send(respuesta);
  }catch(unError){
    res.status(400).send(unError.message);
  }

});

module.exports = router;
