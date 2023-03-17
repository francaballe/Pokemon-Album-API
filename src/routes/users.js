const { Router } = require('express');
const router = Router();
const getUserInformation = require("../controllers/getUserInformation");
const createUser = require("../controllers/createUser");
const updateUser = require("../controllers/updateUser");


//I'm using patch as a solution since "get" will not work with body (from the frontend at least. It does using Insomnia)
//So this is used to loggin, provided user and password
router.patch("/", async function (req,res){
    const { id, password } = req.body

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

router.put("/", async (req, res) => {
    
    try{
        let respuesta = await updateUser(req.body);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message);
    }
    
})

/* router.delete("/:_id", async (req, res) => {

    try{
        const respuesta = await deleteProduct(req.params._id);
        res.send(respuesta);
    }catch(unError){
        res.status(400).send(unError.message)
    }
  }); */


module.exports = router;