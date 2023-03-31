const { Router } = require('express');
const router = Router();
const getPokemons = require("../controllers/getPokemons");
const randomizePokemonStars = require("../controllers/randomizePokemonStars")
const getPokemonById = require("../controllers/getPokemonById.js");


router.get("/randomize", async function (req,res){
    try {
        await randomizePokemonStars();
        res.send("Pokemon Stars has been randomized successfully")
    }catch(unError){
        res.status(400).send(unError.message);
    }   
})

router.get("/", async function (req,res){    
        
        try {
            const respuesta = await getPokemons();    
            res.send(respuesta);
        }catch(unError){
            res.status(400).send(unError.message);
        }       
});     


router.get("/:idPokemon", async function (req,res){
    //console.log(req.params)
    const { idPokemon } = req.params;
    try {
        const respuesta = await getPokemonById(idPokemon);
        res.send(respuesta)
    }catch(unError){
        res.status(400).send(unError.message)
    }
});

module.exports = router;