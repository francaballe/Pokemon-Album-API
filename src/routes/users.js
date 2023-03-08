const { Router } = require('express');
const router = Router();
const getUserInformation = require("../controllers/getUserInformation");
const createUser = require("../controllers/createUser");


router.patch("/", async function (req,res){
    const { id, password} = req.body

    if (id && password){
        try{
            const respuesta = await getUserInformation(id, password);
            //console.log(respuesta)
            res.send(respuesta);
        }catch(unError){
            res.status(400).send(unError.message);
        }  
    }
});


router.post("/", async function (req, res){
        
    try{    
        const respuesta = await createUser(req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
});

/* router.get("/:_idproduct", async function (req,res){
    const { _idproduct } = req.params;
    try {
        const respuesta = await getProductById(_idproduct);
        res.send(respuesta)
    }catch(unError){
        res.status(400).send(unError.message)
    }
}); */

/* router.put("/:_id", async (req, res) => {
    
    const { _id } = req.params;
    //const { name, description, origin, type, stock, category} = req.body;
    
    try{
        let respuesta = await updateProduct(_id,req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
    
}) */

/* router.delete("/:_id", async (req, res) => {

    try{
        const respuesta = await deleteProduct(req.params._id);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message)
    }
  }); */


module.exports = router;